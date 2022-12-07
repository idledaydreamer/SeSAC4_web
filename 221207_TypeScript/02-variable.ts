//*     : 타입 지정 (Type Annotation)   *//
// 일반 변수, 매개 변수(Parameter), 객체 속성(Property) 등에 사용
//? unknown, any > object > Array > Tuple > any


//^ 기본 타입 (12가지)

// 불린, 숫자, 문자열
let boolean: boolean = true;
let number: number = 123;
let string: string = 'hi';


// Array
let Arr1: number[] = [1, 2, 3, 4, 5];
let Arr2: Array<string> = ['a', 'b', 'c', 'd', 'e',]; // generic
let Arr3: Array<string | number> = ["Apple", 1, 2, "Banana", "Mango", 3]; // union
let Arr4: any[] = [0, 1, {}, [], "str", false]; // any

// Tuple
let tuple: [string, number] = ['str', 1];    // tuple[1].concat(); X

// Object
let object: object = [1, 'a'];



// Any - 타입체크 해제
// Unknown - 타입 실드
let any: any = 1;
let anyArr: any[] = [1, true, 'typescript'];
let unknown: unknown = 123;

// Void - undefined | null
let void1: void = undefined;                // 변수 : undefined | null
function void2(): void { console.log('11'); }  // 함수 : undefined


// Never - 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입
function error(message: string): never { throw new Error(message); }
function infiniteLoop(): never { while (true) { } }    // 함수의 마지막에 도달할 수 없다.
function fail() { return error("Something failed"); } // 반환 타입 never로 추론


// Enum 
enum Values { 값1, 값2 };
let v1: Values;
v1 = Values.값1;


// Union |
// Intersection &
let age: number | string | boolean;
age = 30;
age = "age=30";
age = true;











