const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

const addSlashToUrl = (url = '') => {
  url += url.endsWith('/') ? '' : '/';

  return url;
};

module.exports = ({
  mode,
  entry = path.resolve(__dirname, 'src/index.js'),
  plugins = [],
  rules = [],
  resolve = {}
}) => {
  const config = {
    entry,
    output: {
      filename: 'bundle.js',
      publicPath: mode === 'development' ? 'http://localhost:4203/' : addSlashToUrl(process.env.PUBLIC_URL),
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
        ...rules,
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'inventory',
        library: { type: 'var', name: 'inventory' },
        filename: 'remoteEntry.js',
        exposes: {
          './web-components': path.resolve(__dirname, 'src/bootstrap.js'),
        },
        shared: ['react', 'react-dom'],
      }),
      new HtmlWebpackPlugin({
        template:
          './public/index.html',
      }),
      ...plugins,
    ],
    resolve: {
      ...resolve,
    },
  };

  if (mode === 'development') {
    config.devServer = {
      port: 4203,
    };
  }

  return config;
};
