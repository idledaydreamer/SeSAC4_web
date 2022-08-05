//* 실행되는 최상위 파일
//* Express 를 이용해 서버를 실행하는 로직이 담긴다.
const express = require('express');
const app = express(); //app객체는 서버 생성용
const port = 8000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
// app.use(express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


const router = require('./routes');
app.use('/visitor', router);
// "/visitor" 라는 주제로 묶인 경로로 접속할 시 ( localhost:포트/visitor/~~~ )
// ./routes/index.js 에 선언되어 있는 대로 동작한다.


app.get('/', function (req, res) {
    res.send('Index');
})


app.listen(port, () => {
    console.log('Server Port : ', port);
});
