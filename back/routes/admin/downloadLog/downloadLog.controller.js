const { DownloadLog } = require('../../../models');

const read = async (req, res, next) => {
  try {
    const result = await DownloadLog.findAll();
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  read
}