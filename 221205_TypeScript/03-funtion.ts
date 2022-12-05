//? ES6(2015) - 화살표함수, 클래스

//*     function 함수명 (변수명:매개변수타입): 반환타입 {}     */
const func1 = (a: string): void => { console.log("func1"); }

function func2(a:number, b?:number) : number {return 1;}
console.log('optional type', func2(1, 2));



//*     Interface   */

//^ Object 속성(Property) - Optional(?), readOnly
let person = { name: '코딩온', age: 10 };
function getInfo(obj: { name: string, age: number }) {}
getInfo(person)

interface PersonData {
    name: string,
    age: number
    nickname?: string; 
}
function getInfo2(obj: PersonData) {}
let person2: PersonData = { name: '코딩온', age: 10 };
person2.age = person2.age + 1;


//^ Function 타입
interface login {(id: string, pw: string): boolean};
let loginUser: login = (id, pw) => { return true; }


//^ Class 상속
interface Book {
    title: string;
    getInfo3(): void;
    changeTitle(newTitle: string): void;
}
class MyBook implements Book {
    title = 'book';
    date = '2022-12-05';    // property 추가 
    getInfo3() { console.log('정보'); }
    changeTitle(newTitle: string): void {
        
    }
}