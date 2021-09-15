const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const addSlashToUrl = (url = '') => {
  url += url.endsWith('/') ? '' : '/';

  return url;
};

module.exports = ({
  env = 'development',
}) => ({
  output: {
    publicPath: env === 'development' ? 'http://localhost:4200/' : addSlashToUrl(process.env.PUBLIC_URL),
    uniqueName: 'app-shell',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        hr: `hr@${env === 'development' ? 'http://localhost:4201/' : addSlashToUrl(process.env.REMOTE_ENTRY_HR_URL)}remoteEntry.js`,
        produce: `produce@${env === 'development' ? 'http://localhost:4202/' : addSlashToUrl(process.env.REMOTE_ENTRY_PRODUCE_URL)}remoteEntry.js`,
        inventory: `inventory@${env === 'development' ? 'http://localhost:4203/' : addSlashToUrl(process.env.REMOTE_ENTRY_INVENTORY_URL)}remoteEntry.js`,
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
});
