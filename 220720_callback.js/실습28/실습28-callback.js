//* 실습28. http모듈 (callback)

const http = require('http');
const fs = require('fs');

//^ response객체
const server = http.createServer(function (req, res) {
	fs.readFile('./애벌레.html', function (err, data) {
		//promise에서의 catch
		if (err) {
			console.log(err);
			res.writeHead(404);
			res.end(err, message);
		}
		//promise에서의 try
		else {
			res.writeHead(200);
			res.end(data);
		}
	});
});

// const fs = require('fs').promises;
// const server = http.createServer(async function (req, res) {
// 	try {
// 		const data = await fs.readFile('./애벌레.html');
// 		res.writeHead(200);
// 		res.end(data);
// 	} catch (err) {
// 		console.error(err);
// 		res.writeHead(404);
// 		res.end(err.message);
// 	}
// });

//^ server 객체
server.listen(8000, function () {
	console.log('8000번 포트로 서버실행!');
});
