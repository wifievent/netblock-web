const multer = require('multer');
const path = require('path');
const { getRandom, getHash } = require(path.resolve(__dirname, 'hashing'));

const fileFilter = (req, file, cb) => {
  const fileTypeCategory = file.mimetype.split('/')[0];
  if (fileTypeCategory !== 'image') {
    cb({ message: "invalid file type (only image file)" }, false);
  }
  cb(null, true);
}

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename (req, file, cb) {
    const hashFileName = getHash(file.originalname + Date.now(), getRandom());
    cb(null, hashFileName + path.extname(file.originalname));
  }
});

const imgUp = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter
}).single('img');

module.exports = {
  imgUp
}