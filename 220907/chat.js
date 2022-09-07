const express = require('express');
const app = express();
const http = require('http').Server(app);   //app객체로 라우터사용
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/chat.html');
})


// io : 모든 클라이언트 연결
// socket : 각 클라이언트. socket.id : 식별자
io.on("connection", function (socket) {
    console.log('Server socket connected', socket.id);

    socket.emit("info", socket.id);
    io.emit('notice', socket.id + "님이 입장하셨습니다.");
    socket.on("send", function (data) {
        console.log('client message : ', data.msg);
        io.emit("newMessage", { id: socket.id, msg: data.msg });
    })
    socket.on('disconnect', function () {
        io.emit("notice", socket.id + "님이 퇴장하셨습니다.");
    })
});




http.listen(8000, function () {
    console.log('Server port : ', 8000);
})