//~ Model
// req.body 사용X

//& mysql
const mysql = require('mysql');

//& sql 연결
const cnn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'user',
    password: 'dc38541070A!',
    database: 'sesac'           //DB명시
});
// 객체 = sql.createConnection
//createConnection() 실행 - 딕셔너리 형태로 mysql 접속 - 연결된 상태인 객체 정의
//node.js에서 DB 1개만 연결가능

// 객체.query ( 'SQL문' )
//연결된 객체 cnn에서 sql문 실행하는 함수 query - 실행결과 인자로



//TODO controller
//& sql문 실핻
exports.get_visitors = (cb) => {
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) throw err;

        cb(rows);
    });
}



//TODO controller
//& sql문 실핻
exports.insert = (name, comment, cb) => {

    var sql = "INSERT INTO visitor(name,comment) VALUES ( '" + name + "'  , '" + comment + "' )";

    cnn.query(sql, (err, rows) => {
        if (err) throw err;

        cb(rows.insertId);
    });
}