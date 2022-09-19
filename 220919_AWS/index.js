const express = require('express');
const app = express();
const http = require('http').Server(app);   //app객체로 라우터사용
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/chat.html');
})

// io -> 클라이언트와의 모든 연결 가짐
// socket -> 클라이언트 한 명 . socket.id : 클라이언트 구분하는 식별자
var list = {};
io.on("connection", function (socket) {
    console.log('서버소켓 connected, 아이디는', socket.id);
    socket.on("info2", function (data) {
        list[socket.id] = data.nickname;    //키=값
        io.emit('notice', data.nickname + " 님이 입장하셨습니다.");
        io.emit('list', list);
    });
    // socket.emit("info", socket.id);

    socket.on("send", function (data) {
        // data = { msg: "", to: "" };
        console.log('client : ', list[socket.id], ' message : ', data.msg);
        data["is_dm"] = false;
        data["nickname"] = list[socket.id];

        if (data.to == 'all') {     // 단체채팅
            io.emit("newMessage", data);
        } else {                    // 개인DM
            data["is_dm"] = true;
            let socketID = Object.keys(list).find((key) => { return list[key] === data.to; });
            io.to(socketID).emit("newMessage", data);
            socket.emit("newMessage", data);
        }
    });


    socket.on('disconnect', function () {
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
        delete list[socket.id];
    });
});


http.listen(8000, function () {
    console.log('Server port : ', 8000);
})