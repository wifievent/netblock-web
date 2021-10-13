const { DownloadLog, Os, Product } = require('../models')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  let os = req.query.os;
  if (!os)
    next();

  try {
    let filepath = __dirname + '/../program/netblock-' + os + '.txt';
    const os_ = await Os.findOne({
      attributes: ['id'],
      where: { name: os }
    });
    const product = await Product.findOne({
      attributes: ['id'],
      where: { name: 'NetBlock' },
    })
    await DownloadLog.create({
      oId: os_.id,
      productId: product.id,
    })
    res.download(filepath);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
