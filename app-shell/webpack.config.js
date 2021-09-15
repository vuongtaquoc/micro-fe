const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4200/',
    uniqueName: 'app-shell',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        hr: 'hr@http://localhost:4201/remoteEntry.js',
        produce: 'produce@http://localhost:4202/remoteEntry.js',
        inventory: 'inventory@http://localhost:4203/remoteEntry.js',
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};
