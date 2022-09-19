//^클래스
//*highlights
class Cat {
	//^속성
	constructor(name) {
		this.name = name;
	}
	//^메소드
	mew() {
		console.log(this.name + '야옹');
	}
}

//class를 활용해 같은 객체 무한생성
var cat1 = new Cat('나비'); //객체에 이름 부여
var cat2 = new Cat('냥이');

console.log(cat1);
cat1.mew();
cat2.mew();
