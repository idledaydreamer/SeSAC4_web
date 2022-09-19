//^callback
function func1(callback) {
	callback(); //매개변수로 보낼때 이름x
}

//func1(func2);

func1(function a() {
	//인자로 받을때 이름정의 o
	console.log(' 안녕 ');
});
