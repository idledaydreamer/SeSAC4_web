//* 모듈 내보내기
const { response } = require("express");
const User = require("../model/User");

exports.index = (req, res) => {
    res.render("index");
}

//register
exports.register = (req, res) => {
    res.render("register");
}

exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.render('login');
}

//login
exports.login = (req, res) => {
    res.render('login');
}
exports.post_login = async (req, res) => {
    const { id, pw } = req.body;

    const data = await User.get_user(); //User모델에서 get_user() 실행한 결과를 data에 할당
    const info = data.split('\n');


    for (let i = 0; i < info.length; i++) {
        var check = info[i].split('//', 2);

        if (check[0] == id && check[1] == pw) {
            res.send({ "result": true });
            break;
        } else if (i == info.length - 1) {
            res.send({ "result": false });
            break;
        }
    }
}

//* 1. 

// exports.get_user = (req, res) => {
//     res.send("Get User");
// }

/*
exports.get_user = (req, res) => {res.send("Get User");}
exports.a = (req, res) => {}
*/

//* 2. 객체 구조분해할당

// function get_user() { res.send("Get User"); }
// get_user = (req, res) => {
//     res.send("Get User");
// }

// module.exports = get_user;



// function get_user() {res.send("Get User");}
// function a() {}

