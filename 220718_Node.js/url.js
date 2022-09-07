// const { Console } = require("console");
// const url = require("url");
// const { URL } = url;
// const string =
//   "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%83%88%EC%8B%B9";

// const naver = new URL(string);

// console.log(url.format(naver));
// console.log(url.parse(string)); //url분리

// console.log(naver.searchParams);

const { Console } = require("console");
const url = require("url");
const { URL } = url;

const string =
  "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=%EC%83%88%EC%8B%B9&tqi=hWRsZwprvxssscDqo7ossssst6l-347146";
// const url = new URL(address);

const sesac = new URL(string);
url.parse(string);

const sesacParams = new URLSearchParams(sesac.searchParams);

console.log(sesacParams.keys());
console.log(sesacParams.values());

sesacParams.delete("sm");
console.log(sesacParams.keys());
