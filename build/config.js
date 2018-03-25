const path = require('path');

const FOLDER_SRC = 'app';
const FOLDER_DES = 'dist';

module.exports = {
  port: 3099,
  folderSrc: FOLDER_SRC,
  folderDes: FOLDER_DES,
  dirSrc: path.resolve(__dirname, '..', FOLDER_SRC),
  dirDes: path.resolve(__dirname, '..', FOLDER_DES)
};
