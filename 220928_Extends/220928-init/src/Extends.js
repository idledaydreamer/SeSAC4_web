
function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;


// Shape 클래스 
class Shape {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  getArea() {
    return this.w * this.h;
  }
}

// Square(자식)은 Shape(부모)의 특징(메소드, 변수 등) 상속
class Square extends Shape {
}

// 오버라이딩
class Triangle extends Shape {
  // 구조체는 덮어쓸 수 없음
  constructor(x, y, name) {
    super(x, y);  // 부모구조체 호출
    this.name = name;
  }
  getArea() {
    return (this.w * this.h) / 2;
  }
}


let shape1 = new Shape(5, 4);
console.log('shape1: ', shape1.getArea());

let shape2 = new Shape(2, 3);
console.log('shape2: ', shape2.getArea());

let shape3 = new Square(4, 8);
console.log('shape3: ', shape3.getArea());

let shape4 = new Triangle(4, 8);
console.log('shape4: ', shape4.getArea());


