const path = require('path');
const { Page, User, Template } = require(path.resolve(__dirname, '..', '..', 'models'));
const logger = require(path.resolve(__dirname, '..', '..', 'config', 'winston.js'));

const read = async (req, res, next) => {
  const userId = req.user.id;
  const template = await Template.findAll({ where: { userId } });
  return res.status(200).json(template);
}

module.exports = {
  read,
}