
const obj = {
    out: {
        in :{
            key: 'value'
        }
    }
};

console.log(obj);
console.log(objj["out"]);
console.log(obj["out"]["in"]);


console.time("시간");

console.error("에러!");
console.trace("Error");
console.table([{name:'abc',birth:1990},{name:'def',birth:1980}]);

//obj라는 딕셔너리 -  색깔구분, 깊이 어떻게 보여줄지
console.dir(obj, {colors: true, depth:2});
console.dir(obj, {colors: false, depth:1});

console.timeEnd("시간");