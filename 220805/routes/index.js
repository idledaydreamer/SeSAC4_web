//! Router
const express = require("express");
const visitor = require("../controller/VisitorController");
const router = express.Router();











//* View
//TODO Controller - get_visitors()
router.get("/", visitor.get_visitors);

//TODO  Controller = port_comment()
router.post('/write', visitor.post_comment);

//TODO  Controller = undo_comment()
router.post('/undo', visitor.undo_comment);








//! 경로와 컨트롤러 내의 함수를 연결시켜놓은 내용을 module로 내보낸다.
module.exports = router;
