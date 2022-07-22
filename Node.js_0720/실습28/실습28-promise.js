//* 실습28. http모듈 (promise)

const http = require('http');
const fs = require('fs').promises;

//^ response객체
const server = http.createServer(async function (req, res) {
	try {
		const data = await fs.readFile('./애벌레.html');
		res.writeHead(200);
		res.end(data);
	} catch (err) {
		console.error(err);
		res.writeHead(404);
		res.end(err.message);
	}
});

//^ server 객체
server.listen(8000, function () {
	console.log('8000번 포트로 서버실행!');
});
