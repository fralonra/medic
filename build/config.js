const path = require('path');
const config = require('config');

const FOLDER_SRC = 'app';
const FOLDER_DES = 'dist';

module.exports = {
  port: config.port,
  dirSrc: path.resolve(__dirname, '..', FOLDER_SRC),
  dirDes: path.resolve(__dirname, '..', FOLDER_DES),
  dirRoot: path.resolve(__dirname, '..')
};
