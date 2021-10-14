require('dotenv').config();

const { DownloadLog, Os, Product } = require('../models')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  let version = process.env.NETBLOCK_VERSION;
  let os = req.query.os;
  if (!os)
    next();

  try {
    let filepath;
    if (os === 'windows')
      filepath = __dirname + '/../program/netblock-windows-installer-' + version + '.exe';
    else if (os === 'linux')
      filepath = __dirname + '/../program/netblock-linux-installer-' + version;
    else
      next();
    const os_ = await Os.findOne({
      attributes: ['id'],
      where: { name: os }
    });
    const product = await Product.findOne({
      attributes: ['id'],
      where: { name: 'NetBlock' },
    })
    await DownloadLog.create({
      version: version,
      oId: os_.id,
      productId: product.id,
    })
    res.download(filepath);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
