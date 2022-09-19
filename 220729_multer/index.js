//* 220729
const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

//upload 경로지정
// const upload = multer({
//     dest: "uploads/"
// });

//세부경로, 파일명 등 직접지정
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            console.log('destination : ', req.body);
            done(null, "uploads/");
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

app.set('view engine', 'ejs');
app.use('/upload', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


//라우터
app.get('/upload', test, test2, function (req, res) {
    res.render('upload');
});

//실습36
app.post("/upload", upload.single('profile'), function (req, res) {
    // console.log(req.body);
    console.log(req.file);
    const { filename } = req.file;
    console.log(filename);


    res.render('upload2', { filename: filename });
});


//upload.single('input_name'인자) 단일파일
app.post("/upload", upload.single('userfile'), function (req, res) {
    res.send("Upload");
});
// //upload.array('input_name') 다중파일 한 객체 , "req.file[index]""
// app.post("/upload/array", upload.array('userfile'), function (req, res) {
//     console.log(req.body);
//     console.log(req.files);
//     res.send("Upload Array");
// });
// //upload.fields('input_name') 다중파일 여러객체, "req.file['HTML_file_tag_name'][index]"
// app.post("/upload/fields", upload.fields([{ name: 'userfile1' }, { name: 'userfile2' }, { name: 'userfile3' }]), function (req, res) {
//     console.log(req.body);
//     console.log(req.files);
//     res.send("Upload fields");
// });



//upload.~ => upload 후 req.file, req.files 로 파일정보 전달
function test(req, res, next) {
    // console.log('test함수');
    // console.log(req.path);
    next();
}
function test2(req, res, next) {
    // console.log('Test2함수');
    next();
}
app.listen(port, () => {
    console.log('Server Port : ', port);
})