// const os = require("os");
// console.log("os.hostname()", os.hostname());

// const path = require("path");
// const string = __dirname;
// console.log("path.extname(string)", path.extname(string));

const process = __dirname;

const os = require("os");
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());

const path = require("path");
console.log(path.sep);
console.log(path.extname(process));
console.log(path.parse(process));
