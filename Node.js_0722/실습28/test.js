//* 실습28. http모듈
const http = require('http');
const server = http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' }); // 한국말로 잘 보이게 해줌.
	res.write('<h1>hi</h1>');
	res.end('<p>안녕</p>'); // 응답 내용을 적고 보내는 것.
});
// 서버를 열 준비가 된 것
// 일반적인 상태코드가 200
// 서버를 안닫으면???
// req 받은 것을 if문으로 처리할 수 있는데, http우리는 안쓸거고 다음시간에 express 설치해서 할 거임.
server.listen(8000, function () {
	console.log('8000번 포트');
});
server.on('request', function () {
	console.log('client Request');
});
server.on('connection', function () {
	console.log('client connection');
});
server.on('checkContinue', function () {
	console.log('client checkContinue');
});
// 서버를 연 것.
