//^구조 분해 할당
//^배열 구조 분해 - array

let list = ['apple', 'banana'];

//let item1 = list[0];
//let item2 = list[1];

[item1, item2 = 'peach', item3 = 'melon'] = list;

console.log('item1 : ', item1);
console.log('item2 : ', item2);
console.log('item3 : ', item3);

//값 교환 가능!
let x = 1,
	y = 3;
[y, x] = [x, y];

//^객체 구조 분해 - object
