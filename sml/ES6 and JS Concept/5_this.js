/** Ứng với mỗi case khác nhau this sẽ có giá trị khác nhau */
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
  console.log(this); // window or global (tất cả trỏ tới global object tùy vào brower/nodejs)
}
// anonymous function
[1, 2, 3].forEach(function (number) {
  console.log(this); // window or global (tất cả trỏ tới global object tùy vào brower/nodejs)
});

("use strict");
function sayHello() {
  console.log(this); // undefined
}
// anonymous function
[1, 2, 3].forEach(function (number) {
  console.log(this); // undefined
});

/** this in Arrow function */
const sayHello = () => {
  console.log(this); // window or global (tất cả trỏ tới global object tùy vào brower/nodejs)
};

("use strict");
function sayHello() {
  console.log(this); // undefined
  const getLanguage = () => {
    console.log(this); // same as this from outer normal function
  };
  getLanguage();
}

/** this in method */
const studentV1 = {
  name: "Bob",
  sayHello: function () {
    console.log("My name is", this.name);
  },
};
studentV1.sayHello(); // 'My name is Bob'

const studentV2 = {
  name: "Bob",
  // ES6 property methods
  sayHello() {
    console.log("My name is", this.name);
  },
};
studentV2.sayHello(); // 'My name is Bob'

("use strict");
// avoid using arrow function in object methods
const student = {
  name: "Bob",
  // arrow function
  sayHello: () => {
    console.log("My name is", this.name);
  },
};
student.sayHello(); // 'My name is undefined'
