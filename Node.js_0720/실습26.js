//* 실습26. async/await로 변환

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    });
  });
}
function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    });
  });
}

//^ promise
// call("YH")
//   .then(function (name) {
//     console.log(name + " 반가워");
//     return back();
//   })
//   .then(function (txt) {
//     console.log(txt + "을 실행했구나");
//     return hell();
//   })
//   .then(function (message) {
//     console.log("여기는 " + message);
//   });

//^ async/await
async function exec() {
  let name = await call("YH");
  console.log(name + " 반가워!");

  let txt = await back(name);
  console.log(txt + "를 실행했구나");

  let message = await hell(txt);
  console.log("여기는" + message);
}

exec();
