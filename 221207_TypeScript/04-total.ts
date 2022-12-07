//*     ts 실행     *//

//^ 1. tsc      
// (타깃변경: - t es5 )
//^ 2. ts-node 

var ts = 1;


//*   : 타입 지정 (Type Annotation)  *//
// 일반 변수, 매개 변수(Parameter), 객체 속성(Property) 등에 사용
// ES6(2015) - 화살표함수, 클래스


//^ 변수
/*  키워드 변수명: 타입 = 값;   */

//? Primitive type  
let flag: boolean = true;
let num: number = 123;
let str: string = 'hi';

// Null, Undefined
let und: undefined = null;
let nul: null = undefined;
let voi: void = null;
let undN: number = undefined;
let nulS: string = null;
let undO: { a: 1, b: false } = undefined;
let nulA: any[] = null;

// Any
let a1 = null;
let a2: any = [1, true, 'typescript'];

// Unknown
let u: unknown = 123;
let u1: number = u as number;   // 타입 단언하면 할당 가능
let u2: any = u;                // any와 unknown 서로 할당 가능

// Void
let voidV: void = undefined;                  // 변수 : undefined | null
function voidF(): void { console.log(''); }   // 함수 : undefined

// Never - 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입
function err(message: string): never { throw new Error(message); }
function Loop(): never { while (true) { } }    // 함수의 마지막에 도달할 수 없다.
function failed() { return error("Something failed"); } // 반환 타입 never로 추론

// Union & Intersection
type unknownType = unknown | string     // unknown
type stringType = unknown & string      // string

// Enum 
enum Week { Sun, Mon = 22, Tue, Wed, Thu, Fri, Sat };
let day: Week = Week.Tue;           // 23
const re_Week: string = Week[1];    // 'Mon'


//? Object type  
//  Object > Array > Tuple
let obj: { name: string, age: number } = { name: 'ju', age: 27 };
let objTpl: object = [1, 'a'];
let objFunc: object = function () { };
let objNull: object = null;
let objDate: object = new Date();

// Type Alias + Index Signature + Union Type
type myType = {
    [key: string]: string | number;
};
let obj2: myType = { name: "mine", age: 2, };
obj2.prop1 = "hello";
obj2.prop2 = 100;

// Array
let arrN: number[] = [1, 2, 3, 4, 5, 6, 7];
let arrA: any[] = [0, 1, {}, [], "str", false];                             // any
let arrU: (string | number)[] = ["Apple", 1, 2, "Banana", "Mango", 3];      // union
let arrG: Array<string | number> = ["Apple", 1, 2, "Banana", "Mango", 3];   // generic
interface IUser { name: string; age: number; };                             // interface
let arrI: IUser[] = [{ name: "Neo", age: 10 }, { name: "Lewis", age: 64 }];

// Tuple
let tpl: [string, number] = ['str', 1];    // tuple[1].concat(); X
let tplA: [number, string, boolean][] = [[1, 'chris', true]];
let tplB: Array<[number, string, boolean]> = [[2, 'jen', false]];




//^ 함수
/*  function 함수명(매개변수: 타입) : 반환타입 { 반환값; }  */
const func = (a: string): void => { console.log("func"); }

//? Optional Property - undefined 포함한 union type
function getFullname1(firstName: string, lastName?: string): string { return `${firstName} ${lastName}`; }
let fullname1 = getFullname1("steve");      //steve undefined

// Default parameter - 필수X
function getFullname2(firstName: string, lastName: string = ""): string { return `${firstName} ${lastName}`; };
let fullname2 = getFullname2("steve");      //steve

// Rest parameter - 매개변수 개수 제한X
const plus = (...nums: number[]): number => { return nums.reduce((a, c) => a + c, 0); };
plus(); // 0
plus(1, 2, 3, 4, 5); // 15



//^ 인터페이스
// 타입 검사
interface Student {
    name: string,
    age: number,
    nickname?: string
};
let st1: Student = { name: '학생', age: 10 }
let st2: Student = { name: '개똥이', age: 20, nickname: '말똥이' }

// 클래스 구현
interface Shape {
    width: number;
    getLength(): number;
}
class Square implements Shape {
    width: number;
    height: number;
    getLength(): number {
        return 0;
    }
}


//^ 클래스
/*  class 클래스명 { constructor(변수명, 변수명) { this.변수명1 = 변수명; } }   */

interface Developer {
    name: string;
    getName(): string;
}

//? ReadOnly Property
class Developer1 implements Developer {
    readonly name: string;
    constructor(name: string) { this.name = name; }
    getName(): string { return this.name; }
}
class Developer2 {
    constructor(readonly name: string) { }
    getName(): string { return this.name; }
}

let dev1 = new Developer1('새싹');
console.log(dev1.getName());    // dev1.name = 'SeSAC'; (X)

let dev2 = new Developer2("코딩온");
console.log(dev2.getName());



//^ 제네릭 ( Generics )
// 재사용성, 여러 타입 동작하는 걸 만들때 
// Any 보다 제네릭을 쓰자!

// Array<number> = number[]   |   Array<>
// const [age, setAge] = useState<number>(0);

function getText<S>(text: S): S { return text; }
getText<number>(1);
getText<string>('a');
getText(1);    // 타입지정 필수 가능




//* 타입 검사

//^ primitive type:     typeof
//^ object type:        instanceof

