// const express = require('express');
// const app = express();
// const http = require('http').Server(app);   //app객체로 라우터사용
// const io = require('socket.io')(http);


// app.get('/', function (req, res) {
//     console.log('client에게서 get요청 왔다!!');
//     res.sendFile(__dirname + '/index.html');
// })



// // 모든연결 ('이벤트명', 콜백함수(socket) )
// io.on("connection", function (socket) {
//     console.log('Server socket connected');


//     //소켓 write : socket.emit( '이벤트명', 전송메세지 )
//     socket.emit("hello", 'server hello');


//     // 소켓read : socket.on( '이벤트명', 콜백함수(수신메세지) )
//     socket.on("click", function (data) {
//         socket.emit('clickResponse', 'success');    // 들어온 클라이언트에게만 write
//         io.emit('clickResponse', 'io success');     // 전체 클라이언트에게 write
//     })


//     /* 실습 50 
//     var msg = { hello: "하이룽", study: "공부합시다!", bye: "잘가~~" };
//     socket.on("send", function (data) {
//         console.log('client :', data);
//         socket.emit('Response', data + ":" + msg[data]);
//     })*/

// });




// http.listen(8000, function () {
//     console.log('Server port : ', 8000);
// })