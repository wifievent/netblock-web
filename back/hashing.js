const crypto = require('crypto');

const getRandom = () => {
  return crypto.randomBytes(64).toString('hex');
}

const getHash = (plain, salt) => {
  return crypto.scryptSync(plain, salt, 64, { N: 1024 }).toString('hex')
}

module.exports = {
  getRandom,
  getHash,
}