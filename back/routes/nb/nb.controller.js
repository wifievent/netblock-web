require('dotenv').config();
const { DownloadLog, Os, Product } = require('../../models')

const download = async (req, res, next) => {
  let version = process.env.NETBLOCK_VERSION;
  let os = req.query.os;
  if (!os) {
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
    next();
  }
  const os_ = await Os.findOne({
    attributes: ['id'],
    where: { name: os }
  }).catch((err) => {
    console.error(err);
    return next(err);
  });

  const product = await Product.findOne({
    attributes: ['id'],
    where: { name: 'NetBlock' }
  }).catch((err) => {
    console.error(err);
    return next(err);
  });

  await DownloadLog.create({
    version: version,
    oId: os_.id,
    productId: product.id
  }).catch((err) => {
    console.error(err);
    return next(err);
  });

  res.download(filepath);
}

module.exports = {
  download
};
