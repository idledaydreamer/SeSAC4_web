//함수 3개 선언
function call(name, kkkk) {
	setTimeout(function () {
		console.log('call');
		kkkk(name);
	}, 1000);
}
function back(cb) {
	setTimeout(function () {
		console.log('back');
		cb('back');
	}, 1000);
}
function hell(cb) {
	setTimeout(function () {
		console.log('hell');
		cb('callback hell');
	}, 1000);
}

//일반 동기방식이라면, call - back - hell 순으로 실행 예상
call('kim', function (name) {
	console.log(name + ' 반가워');

	back(function (txt) {
		console.log(txt + '을 실행했구나');

		hell(function (message) {
			console.log('여기는 ' + message);
		});
	});
});
