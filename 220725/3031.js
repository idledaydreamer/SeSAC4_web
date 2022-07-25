//* 실습30&31

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); //express서버가 json형태로 데이터를 받겠다는 선언

app.get('/', function (req, res) {
	res.render('31');
});

//^ method - GET
// app.get('/30', function (req, res) {
// 	console.log('30-get');
// 	console.log(req.query);
// 	res.render('receive', req.query);
// 	// res.render('receive', req.query);
// });

//^ method - POST
app.post('/31', function (req, res) {
	console.log('31-post');
	console.log(req.body);
	res.render('receive', req.body);
	//res.render('receive',{a:1, b:2});
});

//포트8000으로 서버열기
app.listen(port, () => {
	console.log('Server Port : ', port);
});
