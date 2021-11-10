const fs = require('fs');
const multer = require('multer');
const path = require('path');

//모든 업로드 되는 파일들은 현재 위치에 uploads라는 폴더 하위에 저장됨
try {
    fs.readdirSync('uploads');
} catch (error) {
    console.error('uploads폴더가 없어 생성합니다.');
    fs.mkdirSync('uploads');
}

const fileFilter = (req, file, callback) => {
    const typeArray = file.mimetype.split('/');
    const fileType = typeArray[1]; // 이미지&동영상 확장자 추출
    //이미지&동영상 확장자 구분 검사
    if (fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png') {
        callback(null, true)
    } else {
        return callback({ message: "*.jpg, *.jpeg, *.png 파일만 업로드가 가능합니다." }, false)
    }
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {//저장경로 설정
            cb(null, 'uploads/');
        },
        filename(req, file, cb) {//파일명 설정
            const ext = path.extname(file.originalname);//파일 확장자 추출. originalname -> 사용자가 업로드한 파일 명
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);//겹칠 수도 있으니 시간을 정수로 달아줌
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: fileFilter
});

//.post('/img')
const show = async (req, res, next) => {
    console.log(req.files);
    try {
        res.json({ url: `/img/${req.file.filename}` });
    } catch (e) {
        console.error(e);
        return next(e);
    }
}

module.exports = {
    upload,
    show
}