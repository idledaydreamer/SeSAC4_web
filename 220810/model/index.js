const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];
/*const a = require("../config/config.json");
{   "development": {
        "host": "127.0.0.1",
        "database": "sesac",
        "username": "user",
        "password": "dc3854",
        "dialect": "mysql"
    },
    "production": {},
    "test": {}
} 
const config = a["develpment"];*/


const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password
    /*
        "sesac",
        "user",
        "dc3854",
        { "host":"127.0.01", "database": "sesac", ... }
    */
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db = { "sequelize" : sequelize, "Sequelize": Sequelize};

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// db.Visitor =  model/Visitor.js의 Visitor() 실행한 결과값 model
// db라는 객체에 Visitor라는 키의 값이 담겨있음

module.exports = db;
