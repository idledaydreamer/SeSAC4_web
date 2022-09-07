//resolve 성공시, reject 실패시

const func1 = new Promise((resolve, reject) => {
  var flag = true;
  if (flag) resolve("성공");
  else reject("실패");
});

func1
  .then((value) => {
    return value + "1";
  })
  .then((result) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
