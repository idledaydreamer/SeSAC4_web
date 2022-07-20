//*fs모듈
const fs = require('fs').promises; //fs.readFileSync();

// console.log(fs);

//^readFile
fs.readFile('./read.txt', function (err, data) {
	if (err) console.log(err);
	else {
		console.log(data);
	}
});

// //^writeFile
// fs.writeFile('./write.txt', '안녕')
// 	.then(() => {
// 		console.log('작성 완료');
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// //^copyFile
// fs.copyFile('./write.txt', './copy.txt')
// 	.then(() => {
// 		console.log('복사 완료');
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
