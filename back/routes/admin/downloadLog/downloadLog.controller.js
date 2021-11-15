const { DownloadLog } = require('../../../models');
const logger = require('../../../config/winston');
const read = async (req, res, next) => {
  const result = await DownloadLog.findAll().catch((err) => {
    console.error(err);
    logger.error(err);
    return next(err);
  });
  logger.info('get downloadLog success');
  return res.status(200).json(result);
}

module.exports = {
  read
}