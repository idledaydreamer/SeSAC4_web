//* 실습29. 서버 업로드
const express = require('express');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('애벌레');
});

const port = 8000;
app.listen(port, function () {
	console.log('Server port : ', port);
});
