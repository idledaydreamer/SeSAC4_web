// const Visitor = require("../model/Visitor");
const models = require("../model");
// models = model/index.js - db

exports.get_visitors = (req, res) => {

    //model-Visitor에서의 model 불러오고 findAll() 실행
    models.Visitor.findAll()   // sequelize문법. SELECT * FROM visitor;
        .then((result) => {
            console.log('result : ', result);
            console.log('index');
            res.render("index", { data: result });
        });

    // Visitor.get_visitors(function (result) {
    //     console.log("result : ", result);
    //     console.log("index");
    //     res.render("index", { data: result });
    // });
}

exports.post_comment = (req, res) => {
    // console.log(req.body);

    // Visitor.insert(req.body.name, req.body.comment, function (result) {
    //     res.send({ id: result });
    // });
    let object = {
        name: req.body.name,
        comment: req.body.comment
    };
    models.Visitor.create(object)
        .then((result) => {
            console.log(result);
            res.send({ id: result.id });
            // res.send({id: result});
        })
}

exports.get_visitor = (req, res) => {
    // Visitor.get_visitor(req.query.id, function (result) {
    //     console.log("result : ", result);
    //     res.send({ result: result[0] });
    // })
}

exports.patch_comment = (req, res) => {
    // Visitor.update(req.body, function (result) {
    //     console.log(result);
    //     res.send("수정 성공");
    // });
}

exports.delete_comment = (req, res) => {
    // Visitor.delete(req.body.id, function (result) {
    //     console.log(result);
    //     res.send("삭제 성공");
    // });
}