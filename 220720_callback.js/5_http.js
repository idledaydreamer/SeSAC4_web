//* http모듈
const http = require('http');

//^ response객체
//  res : 서버 실행 준비, 응답 내용을 적고 보내는 것.
const server = http.createServer(function (req, res) {
	res.writehead(200, { 'Content-Type': 'text/html; charset=utf8' }); //응답헤더
	res.write('<h1>hi hello</h1>'); //응답본문
	res.end('<p>End</p>'); //응답종료
});

// 일반적인 상태코드가 200
// req 받은 것을 if문으로 처리가능, 하지만 express쓸것.

//^ server 객체
// listen : 서버실행, 클라이언트 기다림
server.listen(8000, function () {
	console.log('8000번 포트로 서버 실행');
});
// on : server객체에 이벤트 등록
server.on('request', function () {
	console.log('Client Request');
});

server.on('connection', function () {
	console.log('Client Connection');
});

server.on('checkContinue', function () {
	console.log('Client checkContinue');
});
