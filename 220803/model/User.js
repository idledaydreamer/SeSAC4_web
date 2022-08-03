//* Model - User모델에서 데이터 처리
const fs = require('fs').promises;


exports.post_user = function (data) {
    const { id, pw, name, age } = data;
    const info = id + "//" + pw + "//" + name + "//" + age + '\n';
    // fs.writeFile('./info.txt', info);
    fs.appendFile('info.txt', info);
}

exports.get_user = async function () {
    const buffer = await fs.readFile('./info.txt');
    return buffer.toString();   //버퍼를 문자열로 변환
}

exports.get_profile = async function () {

}