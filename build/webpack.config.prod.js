const webpack = require("webpack");
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackBaseConfig = require('./webpack.config.base.js');

module.exports = merge(webpackBaseConfig, {
  optimization: {
    splitChunks: {
    	chunks: "async",
    	minSize: 30000,
    	minChunks: 1,
    	maxAsyncRequests: 5,
    	maxInitialRequests: 3,
    	name: true,
    	cacheGroups: {
    		default: {
    			minChunks: 2,
    			priority: -20,
    			reuseExistingChunk: true
    		},
    		vendors: {
    			test: /[\\/]node_modules[\\/]/,
    			priority: -10
    		}
    	}
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true
    })
  ]
});
