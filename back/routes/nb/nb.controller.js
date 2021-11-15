require('dotenv').config();
const { DownloadLog, Os, Product } = require('../../models')
const logger = require('../../config/winston');

const download = async (req, res, next) => {
  const version = process.env.NETBLOCK_VERSION;
  const os = req.query.os;
  if (!os) {
    logger.error("Cannot find os");
    next();
  }

  let filepath;
  if (os === 'windows') {
    filepath = __dirname + '/../program/netblock-windows-installer-' + version + '.exe';
  }
  else if (os === 'linux') {
    filepath = __dirname + '/../program/netblock-linux-installer-' + version;
  }
  else {
    logger.error("Wrong os");
    next();
  }
  const os_ = await Os.findOne({
    attributes: ['id'],
    where: { name: os }
  }).catch((err) => {
    console.error(err);
    logger.error(err);
    return next(err);
  });

  const product = await Product.findOne({
    attributes: ['id'],
    where: { version: version }
  }).catch((err) => {
    logger.error(err);
    console.error(err);
    return next(err);
  });

  await DownloadLog.create({
    oId: os_.id,
    productId: product.id
  }).catch((err) => {
    console.error(err);
    logger.error(err);
    return next(err);
  });

  res.download(filepath);
}

module.exports = {
  download
};
