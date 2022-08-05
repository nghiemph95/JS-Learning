/** example function and block scope */
function sayHello() {
  {
    const lang = "en"; //block scope
    var message = "hello"; // function scope
  }

  console.log(lang); // Reference: lang is not defined
  console.log(message); // 'hello'
}
