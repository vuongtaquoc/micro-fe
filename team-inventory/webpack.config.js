const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

console.log(path.resolve(__dirname, 'src/index.js'))

module.exports = options => {
  return {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      filename: 'dist/bundle.js',
      publicPath: 'http://localhost:4203/',
      uniqueName: 'team-inventory'
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
        {
          test: /.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: 'inventory',
        library: { type: 'var', name: 'inventory' },
        filename: 'remoteEntry.js',
        exposes: {
          './web-components': path.resolve(__dirname, 'src/app.js'),
        },
        shared: ['react', 'react-dom'],
      })
    ],
    devServer: {
      port: 4203,
    },
  };
};
