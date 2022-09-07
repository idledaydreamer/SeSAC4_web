const fs = require("fs");

fs.readFile("./text.txt", (err, data) => {
  if (err) throw err; //throw - 자동으로 에러 알려줌

  console.log(data);
  console.log(data.toString()); //toString() - 버퍼를 읽을 수 있게 문자열로 변환
});
