// Default parameter value
function sum(a, b) {}
function sum(a, b = 10) {}
function sum(a = 5, b = 10) {}

function sum(a = 5, b = 10) {
  return a + b;
}

sum(); // 15
sum(10); // 20
sum(10, 20); // 30

sum(undefined, undefined); // 15
sum(undefined, null); // 5 as null is converted to 0

// Rest parameter - Gom danh sach lai thanh 1
/** ES5 */
function sum() {
  let sum = 0;
  //Arguement object is an Array-like object, not Array
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

sum(1); //1
sum(1, 2); //3
sum(1, 2, 3); //6

//Convert arguements to Array
function sum() {
  return [...arguments].reduce((total, number) => total + number);
}

/** ES6 */
// Prefer this way instead of arguments
function sum(...numberList) {
  return numberList.reduce((total, number) => total + number); // ...numberList : Array
}

// Spread operator - Tu 1 tach ra thanh 1 danh sach
function sum(...numberList) {
  return numberList.reduce((total, number) => total + number); // ...numberList : Array
}

const numberList = [1, 2, 3];
console.log(sum(...numberList)); //spread operator - split parameter into '1', '2', '3'

//Arrow function
function sum() {} // function declaration
const sum = function () {}; // function expression
const sum = () => {}; // arrow function

const sum = (a, b) => {
  return a + b;
};

//shorthand
const sum = (a, b) => a + b;

//example
const getStudentV1 = () => {
  return { name: "Easy" };
};

const getStudentV2 = () => ({
  name: "Easy",
});
console.log(getStudentV2());

// Constructor function
function Student(id, name) {
  this.is = id;
  this.name = name;

  this.sayHello = function () {
    console.log("Test", this.name);
  };
}

const alice = new Student(1, "Alice");
alice.sayHello(); // Test Alice

const bob = new Student(2, "Bob");
bob.sayHello(); // Test Bob

// Curry function
sum(1)(2); //3
//Explain
sum(1); // return 1 function
sum(1)(2); // return 1 other function

function sum(x) {
  return function (y) {
    return x + y;
  };
}

// Closure + curry function
// generate inscrease id
function createIdGen(startId = 1) {
  let id = startId;

  return function () {
    return id++;
  };
}

const getNextId = createIdGen(10);
getNextId(); //10
getNextId(); //11
getNextId(); //12
