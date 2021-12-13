const path = require('path');
const { Template } = require(path.resolve(__dirname, '..', '..', 'models'));
const logger = require(path.resolve(__dirname, '..', '..', 'config', 'winston.js'));

const read = async (req, res, next) => {
  const template = await Template.findAll();
  logger.info('template read success');
  return res.status(200).json(template);
}

module.exports = {
  read,
}