//함수 3개 선언
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

console.log("start!");

call("kim")
  .then(function (name) {
    console.log(name + " 반가워");
    return back();
  })
  .then(function (txt) {
    console.log(txt + "을 실행했구나");
    hell();
  })
  .then(function (message) {
    console.log("여기는 " + message);
  });
