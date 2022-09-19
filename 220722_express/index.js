//* express 모듈
const express = require('express');
const app = express();

//^ 미들웨어
//정적파일 관리경로 public
//public에 접근하는 가상경로 abc
app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	// res.send('Hello Express!');

	//^ render : 파일불러와서 읽기
	res.render('clone');
	// res.render('test', { a: aaa, b: bbb });
	// var list = [];
});

const port = 8000;
app.listen(port, () => {
	console.log('Server port : ', port);
});
