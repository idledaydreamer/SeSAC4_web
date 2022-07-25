//* 실습32 - 회원가입페이지
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs').promises;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//클라이언트에 보이는 view
app.get('/', function (req, res) {
	res.render('32');
});

app.post('/32', function (req, res) {
	console.log('32-post');
	console.log(req.body);
	res.render('32receive', req.body);
	const { id, pw } = req.body;
	var info = +id + '//' + pw;
	// req.body는 딕셔너리 형태의 객체임.
	fs.writeFile('info.txt', info);
	console.log(id, pw);
	console.log(fs.readFile('info.txt'));
});
// app.post('/ex31receive', function (req, res) {
// 	console.log('ex31receive');
// 	console.log(req.body);
// 	res.render('ex31receive', req.body);
// 	const { id, pw } = req.body;
// 	var info = +id + '//' + pw;
// 	// req.body는 딕셔너리 형태의 객체임.
// 	fs.writeFile('info.txt', info);
// });

//포트8000으로 서버열기
const port = 8000;
app.listen(port, () => {
	console.log('Server Port : ', port);
});
