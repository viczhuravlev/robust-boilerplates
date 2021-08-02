function getFilename(isProduction, folderName, ext) {
  const folder = folderName ? `${folderName}` : '';
  const extension = ext ? `.${ext}` : '[ext]';

  return isProduction
    ? `${folder}/[name].[contenthash:8]${extension}`
    : `${folder}/[name]${extension}`;
}

module.exports = {
  getFilename,
};
