//* Axios 
const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.render('index');
})


app.get('/test', function (req, res) {
    res.send('test!');
})
app.get('/test2', function (req, res) {
    res.send({name: "test2", message: 123});
})



//^ GET
app.get("/receive", function (req, res) {
    console.log(req.query);

    let name = req.query.name;
    let msg = req.query.name + "지롱";
    res.send({ name: name, message: msg });
    //클라에게 보내는 메세지
})

//^ POST
app.post("/receive", function (req, res) {
    console.log(req.body);

    let name = req.body.name;
    let msg = req.body.name + "지롱";
    res.send({ name: name, message: msg });
    //클라에게 보내는 메세지
})


app.listen(port, () => {
	console.log('Server Port : ', port);
})

