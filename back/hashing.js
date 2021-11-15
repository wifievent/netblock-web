const crypto = require('crypto');

const getRandom = function () {
  return crypto.randomBytes(64).toString('hex');
}

const getHash = function (plain, salt) {
  return crypto.scryptSync(plain, salt, 64, { N: 1024 }).toString('hex')
}

module.exports = {
  getRandom,
  getHash
}