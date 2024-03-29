// finallied 6/2021

/** Logical Assignment OperatorsF */
// # Name Desc
// 1 Logical OR assignment ||=       x ||= y  means only assigns x = y if x is falsy.
// 2 Logical AND assignment &&=      x &&= y  means only assigns x = y if x is truthy.
// 3 Logical Nullish assignment ??=  x ??= y   means only assigns x = y if x is nullish

//"Or Or Equals"
x ||= y;
x || (x = y); // Nếu x là false thì x gán bằng y
// "And And Equals"
x &&= y;
x && (x = y); // Nếu x là true thì x gắn bằng y
// "QQ Equals"
x ??= y;
x ?? (x = y); // Nếu x là nullish thì x gán bằng y

//Logical OR assignment examples
const a = { duration: 50, title: "" };

a.duration ||= 10;
console.log(a.duration);
// expected output: 50

a.title ||= "title is empty.";
console.log(a.title);
// expected output: "title is empty"

//Logical AND assignment examples
let ax = 1;
let b = 0;

ax &&= 2;
console.log(ax);
// expected output: 2

b &&= 2;
console.log(b);
// expected output: 0

//Logical Nullish assignment examples
const ai = { duration: 50 };

ai.duration ??= 10;
console.log(ai.duration);
// expected output: 50

ai.speed ??= 25;
console.log(ai.speed);
// expected output: 25

//Numeric separator
// before
const counter = 1000000;

// ES2021 - more readable
const count = 1_000_000;
// don't overuse it =)))
1_00; // 100
10_0; // 100
1_5_0; // 150;

//String.prototype.replaceAll(); Điểm khác nhau giữa replace và replaceAll là replace chỉ replace phần tử đầu tiên nó tìm thấy, còn All thì nó sẽ replace tất cả đổi
// với string
// Before: need to use regex with global flag
const queryStringX = "q=query+string+parameters";
const withSpaces = queryString.replace(/\+/g, " ");
// 'q=query string parameters'

// ES2021
const queryString = "q=query+string+parameters";
// const withSpaces = queryString.split('+').join(' ');
queryString.replaceAll("+", " ");
// 'q=query string parameters'

//Promise.any
Promise.any([
  fetch("https://v8.dev/").then(() => "home"),
  fetch("https://v8.dev/blog").then(() => "blog"),
  fetch("https://v8.dev/docs").then(() => "docs"),
])
  .then((first) => {
    // Any of the promises was fulfilled.
    console.log(first);
    // → 'home'
  })
  .catch((error) => {
    // All of the promises were rejected.
    console.log(error);
  });

/** Promise.race = wait for the first item either fulfilled or rejected.
Promise.any = wait for the first fulfilled item */
