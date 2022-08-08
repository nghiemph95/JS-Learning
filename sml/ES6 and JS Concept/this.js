/** browser */
console.log(this); // window object
console.log(this === window); //true

this.name = "Test";
console.log(window.name); // Test

/** node js */
console.log(this); // global object
console.log(this === global); //true

this.name = "Easy Frontend";
console.log(global.name); // 'Easy Frontend'

/** this in normal function */
//non-strict mode
function sayHello() {
  console.log(this); // window or global
}
// anonymous function
[1, 2, 3].forEach(function (number) {
  console.log(this); // window or global
});

("use strict");
function sayHello() {
  console.log(this); // undefined
}
// anonymous function
[1, 2, 3].forEach(function (number) {
  console.log(this); // undefined
});
