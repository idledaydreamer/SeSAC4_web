//* 실습33 - 동적 폼 전송 (Axios)
const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.render('33');
})

app.get("/33user", function (req, res) {
    res.send(req.query);
    // res.render('33user');
})


app.listen(port, () => {
	console.log('Server Port : ', port);
})
