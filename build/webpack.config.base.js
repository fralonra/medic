const os = require('os');
const path = require('path');
const HappyPack = require('happypack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const config = require('./config');

module.exports = {
  //console.log(path.resolve(config.folderSrc, 'index.js'));
  //return {
    // entry: path.resolve(config.folderSrc, 'index.js'),
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
          // loader: 'babel-loader',//'happypack/loader?id=happybabel',
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
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(svg|woff|woff2|eot|ttf)$/,
          use: ['file-loader']
        }
      ]
    },
    plugins: [
      /* new HappyPack({
        id: 'happybabel',
        loaders: ['babel-loader'],
        threadPool: happyThreadPool,
        verbose: true
      }), */
      new CleanWebpackPlugin([config.folderDes]),
      new HtmlWebPackPlugin({
        title: 'Medic',
        template: path.resolve(config.folderSrc, 'index.html'),
        filename: 'index.html',
        hash: true
      })
    ],
    resolve: {
      alias: {
        'ROOT': path.resolve(__dirname, '..'),
        'APP': path.resolve(__dirname, '../app')
      }
    }
  //};
};
