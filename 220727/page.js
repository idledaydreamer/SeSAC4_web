//TODO 회원가입 & 로그인
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { rmSync } = require('fs');
const fs = require('fs').promises;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
	res.render('signup');
})

//^ 로그인
app.get('/login', function (req, res) {
	res.render('login');
});


//* 회원가입
app.post('/signup', function (req, res) {
	res.render('signup');

	//필수정보 구조분해할당
	const { name, id, pw } = req.body;
	//필수정보 저장
	let info = name + '//' + id + '//' + pw;
	fs.writeFile('info.txt', info);
});


//^ 로그인 - 확인
app.post('/login', function (req, res) {

	fs.readFile("info.txt")
    .then( function(data) {
		data = data.toString().split("//");
		
		//필수정보 구조분해할당
		const { id, pw } = req.body;
		
		//필수정보 확인
		if (data[1] == id && data[2] == pw) {
			// res.send("로그인 성공");
			res.send({ "result": true });
		}
		else {
			res.send({ "result": false });
            //alert("아이디 혹은 비밀번호가 틀렸습니다.");
        }
    })
}) 

const port = 8000;
app.listen(port, () => {
	console.log('Server Port : ', port);
});
