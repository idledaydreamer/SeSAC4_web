//* 실습28. http모듈
const server = http.createServer(function (req, res) {
  res.writehead(200, { "Content-Type": "text/html; charset=utf8" }); //응답헤더
  res.write("<h1>hi hello</h1>"); //응답본문
  res.end("<p>End</p>"); //응답종료
});

server.listen(8000, function () {
  console.log("8000번 포트로 서버 실행");
});

server.on("request", function () {
  console.log("Client Request");
});

server.on("connection", function () {
  console.log("Client Connection");
});

server.on("checkContinue", function () {
  console.log("Client checkContinue");
});
