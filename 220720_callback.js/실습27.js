//* 실습27. fs모듈 이용하기 (비동기 방식)
// const fs = require("fs").promises;

// fs.mkdir("sesac", (err) => console.log(err));

// async function exec() {
//   await fs.writeFile("./sesac/sesac.txt", "반갑습니다!");
//   await fs.copyFile("./sesac/sesac.txt", "./sesac/sesac2.txt");
//   await fs.rename("./sesac/sesac2.txt", "./sesac/new.txt");
// }

// exec();

//* 실습27. fs모듈 이용하기 (동기 방식)
const fs = require("fs");

fs.mkdir("sesac", (err) => console.log(err));

async function exec() {
  await fs.writeFile("./sesac/sesac.txt", "반갑습니다!");
  await fs.copyFile("./sesac/sesac.txt", "./sesac/sesac2.txt");
  await fs.rename("./sesac/sesac2.txt", "./sesac/new.txt");
}

exec();
