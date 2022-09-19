const func1 = setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500);
const func2 = setInterval(() => {
  console.log("1초마다 반복");
}, 1000);
//3초후에 실행
const func3 = setTimeout(() => {
  console.log("func3 실행");
}, 3000);

//2초후에 func3함수 멈춤
setTimeout(() => {
  clearTimeout(func3);
  clearInterval(func2);
}, 2500);

const func4 = setImmediate(() => {
  console.log("func4 즉시 실행");
});
const func5 = setImmediate(() => {
  console.log("func5 즉시 실행");
});
//즉시멈춤
clearImmediate(func5);
