const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, './tsconfig.json'),
  [
    // 'auth-lib'
  ]
);

const addSlashToUrl = (url = '') => {
  url += url.endsWith('/') ? '' : '/';

  return url;
};

module.exports = ({
  env = 'development',
}) => ({
  output: {
    // publicPath: env === 'development' ? 'http://localhost:4200/' : addSlashToUrl(process.env.PUBLIC_URL),
    publicPath: 'auto',
    uniqueName: 'app-shell',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        // hr: `hr@${env === 'development' ? 'http://localhost:4201/' : addSlashToUrl(process.env.REMOTE_ENTRY_HR_URL)}remoteEntry.js`,
        // produce: `produce@${env === 'development' ? 'http://localhost:4202/' : addSlashToUrl(process.env.REMOTE_ENTRY_PRODUCE_URL)}remoteEntry.js`,
        // inventory: `inventory@${env === 'development' ? 'http://localhost:4203/' : addSlashToUrl(process.env.REMOTE_ENTRY_INVENTORY_URL)}remoteEntry.js`,
        // shareable: `shareable@${env === 'development' ? 'http://localhost:4299/' : addSlashToUrl(process.env.REMOTE_ENTRY_SHAREABLE_URL)}remoteEntry.js`
      },
      // shared: ['@angular/core', '@angular/common', '@angular/router'],
      shared: {
        '@angular/core': { requiredVersion: '12.2.0' },
        '@angular/common': { requiredVersion: '12.2.0' },
        '@angular/router': { requiredVersion: '12.2.0' },
        '@angular/common/http': { requiredVersion: '12.2.0' },
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
});
