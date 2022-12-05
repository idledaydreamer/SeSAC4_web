//*     : 타입 지정 (Type Annotation)   *//
// 일반 변수, 매개 변수(Parameter), 객체 속성(Property) 등에 사용
//? unknown, any > object > Array > Tuple > any


//^ 기본 타입 (12가지)
// 불린, 숫자, 문자열
let flag: boolean = true;
let num: number = 123;
let str: string = 'hi';

// Object - 원시타입 아닌 타입(number, string, boolean, bigint, symbol, null, undefined 제외)
let obj: object;
obj = [1, 2, 3];

// Array
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: Array<string> = ['a', 'b', 'c', 'd', 'e',]; // generic
let arr3: Array<string | number> = ["Apple", 1, 2, "Banana", "Mango", 3]; // union
let arr4: any[] = [0, 1, {}, [], "str", false]; // any

// Tuple - 요소 타입, 길이 불변
let tuple: [string, number] = ['str', 1];    // tuple[1].concat(); X



// Any - 타입체크 해제 | Unknown - 타입 실드
let any: any = 1;
let anyArr: any[] = [1, true, 'typescript'];
let u: unknown = 123;

// Void - undefined | null
let void1: void = undefined;                // 변수 : undefined | null
function void2(): void{console.log('11');}  // 함수 : undefined

// Never - 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입
function error(message: string): never { throw new Error(message); }
function infiniteLoop(): never {while (true) {}}    // 함수의 마지막에 도달할 수 없다.
function fail() {return error("Something failed");} // 반환 타입 never로 추론



//^ Enum - 열거형 집합
enum Names { hello, bye, you };
let name1: Names = Names.hello;
name1 = Names.bye



//^ 유니온과 교차 타입
// Union - 합집합
let age: number | string;   

// Intersection - 교집합
// 원시 타입X, 주로 객체 타입 정의에 사용
// 교차되는 필드 타입이 동일해야 함

type unknownType = unknown | string     // unknown
type stringType = unknown & string      // string









