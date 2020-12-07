function getFilename(isProduction, ext = 'js') {
  return isProduction ? `${ext}/[name].[contenthash:8].${ext}` : `${ext}/[name].${ext}`;
}

module.exports = {
  getFilename,
};
