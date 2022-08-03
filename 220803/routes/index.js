//* Router는 엔드포인트를 나누어 각 요청에 대한 처리
const express = require("express");
const userRouter = express.Router();
const user = require("../controller/UserController");

//^ / 접속 시 UserController의 index 함수 실행
userRouter.get("/", user.index);

//^ /register 접속 시 UserController의 register 함수 실행
userRouter.get("/register", user.register);
userRouter.post('/register', user.post_register);

//^ /login 접속 시 UserController의 login 함수 실행
userRouter.get('/login', user.login);
userRouter.post('/login', user.post_login);

//^ 경로와 컨트롤러 내의 함수를 연결시켜놓은 내용을 module로 내보낸다.
module.exports = userRouter;
