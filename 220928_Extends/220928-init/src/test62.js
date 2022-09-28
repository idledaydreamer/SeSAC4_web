import React from "react";

function test62() {
    return (
        <div className="test62">
            <h1>실습 62</h1>
        </div>
    );
}

export default test62;


class Student {
    constructor(n, s, a, c) {
        this.n = n;
        this.s = s;
        this.a = a;
        this.c = c;
    }
    getInfo() {
        // return `이름 : ${this.n}
        // 나이 : ${this.s}
        // 학교 : ${this.a}
        // 학번 : ${this.c}`
        return (this.n + '\n' + this.s + '\n' + this.a + '\n' + this.c);
    }
}

class Kim extends Student {
}
class Lee extends Student {
}

let student1 = new Kim('김뫄뫄', '새싹중', 30, '001');
console.log(student1.getInfo());

let student2 = new Lee('이땡땡', '새싹고', 50, '002');
console.log(student2.getInfo());


