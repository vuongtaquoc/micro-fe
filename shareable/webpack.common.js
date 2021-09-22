const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const fs = require('fs');

const sourceDir = path.resolve(__dirname, 'src');

const addSlashToUrl = (url = '') => {
  url += url.endsWith('/') ? '' : '/';

  return url;
};

const exposeFileByFolder = (directory) => {
  const directoryPath = path.resolve(sourceDir, directory);

  try {
    const files = fs.readdirSync(directoryPath);

    return files.reduce(
      (exposes, fileName) => {
        const ext = path.extname(fileName);

        return ext === '.js' ? { ...exposes, [`./${directory}/${fileName}`]: path.resolve(directoryPath, fileName) } : { ...exposes };
      },
      {}
    );
  } catch (e) {
    console.log(e);
    return {};
  }
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
      publicPath: mode === 'development' ? 'http://localhost:4299/' : addSlashToUrl(process.env.PUBLIC_URL),
      uniqueName: 'shareable'
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
        name: 'shareable',
        library: { type: 'var', name: 'shareable' },
        filename: 'remoteEntry.js',
        exposes: {
          './components/card': path.resolve(__dirname, 'src/components/Card.js'),
          // ...exposeFileByFolder('components'),
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
      port: 4299,
    };
  }

  return config;
};
