module.exports = function (value) {
  var err = {};

  if (typeof value !== 'object') {
    return err;
  }

  return true;
};
