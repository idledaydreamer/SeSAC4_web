//TODO Controller

//~ Model
const Visitor = require("../model/Visitor");





//! Router
exports.get_visitors = (req, res) => {

    //~ Model - get_visitors()
    Visitor.get_visitors(function (result) {
        res.render('index', { data: result });
    });
}



exports.post_comment = (req, res) => {

    //~ Model - insert()
    Visitor.insert(req.body.name, req.body.comment, function (result) {
        res.send({ id: result });
    });
}



exports.undo_comment = (req, res) => {

    //~ Model - insert()
    Visitor.undo(req.body.name, req.body.comment, function (result) {
        res.send(true);
    });
}










// 1. 

// exports.get_visitor = (req, res) => {
//     res.send("Get Visitor");
// }

/*
exports.get_visitor = (req, res) => {res.send("Get Visitor");}
exports.a = (req, res) => {}
*/

// 2. 객체 구조분해할당

// function get_visitor() { res.send("Get Visitor"); }
// get_visitor = (req, res) => {
//     res.send("Get Visitor");
// }

// module.exports = get_visitor;



// function get_visitor() {res.send("Get Visitor");}
// function a() {}

