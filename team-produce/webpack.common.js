const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const addSlashToUrl = (url = '') => {
  url += url.endsWith('/') ? '' : '/';

  return url;
};

module.exports = ({
  env = 'development',
}) => ({
  output: {
    publicPath: env === 'development' ? 'http://localhost:4202/' : addSlashToUrl(process.env.PUBLIC_URL),
    uniqueName: 'team-produce',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'produce',
      library: { type: 'var', name: 'produce' },
      filename: 'remoteEntry.js',
      exposes: {
        './web-components': './src/bootstrap.ts',
      },
      shared: {
        '@angular/core': { requiredVersion: '12.2.0' },
        '@angular/common': { requiredVersion: '12.2.0' },
        '@angular/router': { requiredVersion: '12.2.0' },
        'rxjs': {},
      },
    }),
  ],
});
