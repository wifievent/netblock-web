const { DownloadLog } = require('../../../models');

const read = async (req, res, next) => {
  const result = await DownloadLog.findAll().catch((err) => {
    console.error(err);
    return next(err);
  });
  return res.status(200).json(result);
}

module.exports = {
  read
}