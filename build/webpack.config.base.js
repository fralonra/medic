const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = require('./config');

module.exports = {
  output: {
    path: config.dirDes,
    publicPath: 'public',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Medic',
      template: path.resolve(config.dirSrc, 'index.html'),
      filename: 'index.html',
      hash: true
    })
  ],
  resolve: {
    alias: {
      'ROOT': path.resolve(__dirname, '..'),
      'APP': path.resolve(__dirname, '../app'),
      'SERVER': path.resolve(__dirname, '../server')
    }
  }
};
