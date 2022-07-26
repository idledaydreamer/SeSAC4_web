//* 실습32 - 회원가입페이지
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs').promises;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.render('32');
});

app.post('/32', function (req, res) {
	console.log(req.body);
	res.render('32receive', req.body);
	const { name, id, pw } = req.body;
	let info = name+ '//' +id + '//' + pw;
	fs.writeFile('info.txt', info);
});
// app.post('/ex31receive', function (req, res) {
// 	console.log('ex31receive');
// 	console.log(req.body);
// 	res.render('ex31receive', req.body);
// 	const { id, pw } = req.body;
// 	var info = +id + '//' + pw;
// 	fs.writeFile('info.txt', info);
// });


const port = 8000;
app.listen(port, () => {
	console.log('Server Port : ', port);
});
