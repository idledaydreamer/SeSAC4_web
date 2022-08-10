
const Visitor = (Sequelize, DataTypes) => {
    //Sequilize : model/index.js - sequelize
    //DataTypes : model/index.js - Sequelize

    //* Sequelize 모델 정의
    const model = Sequelize.define(
        'visitor',  //*모델(테이블) 이름
        {           //*컬럼 정의
            id: {   // id int not null auto_increment primaryKey
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {    // name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment: {  // comment mediumtext
                type: DataTypes.TEXT('medium'),
            }
        },
        {        //*모델 옵션 정의
            tableName: 'visitor',
            freezeTableName: true,
            timestamps: false
        }
    );

    return model;
}

module.exports = Visitor;