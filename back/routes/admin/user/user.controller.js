const { User } = require('../../../models')
const logger = require('../../../config/winston');
const read = async (req, res, next) => {
  const result = await User.findAll({
    attributes: ['uid', 'pw', 'name', 'email', 'isAdmin']
  }).catch((err) => {
    console.error(err);
    logger.error(err);
    return next(err);
  });
  if (!result) {
    logger.error("cannot find user");
    return res.status(400).json({ msg: "cannot find user" });
  }
  logger.info('get userdata success');
  return res.status(200).json(result);
}

module.exports = {
  read
}