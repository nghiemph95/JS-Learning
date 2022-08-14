/** 1.Property shorthand - Gán props cho Object nhưng dạng rút gọn
 *  2.Computed property name
 *  3.Method properties
 *  4.Desctructuring - Rút trích thuộc tính của mọt Object nào đấy
 *  5.Object.assign()
 */

/** Props shorthand */
const id = 1;
const name = "Easy Frontend";
const age = 18;

const student = {
  id: id, // key and variable name are the same
  name: name,
  age: age,
  isHero: false,
};
// shorthand version
const studentShorthand = {
  id,
  name,
  age,
  isHero: false,
};

/** Computed property name */
const key = "Power";
const studentV1 = {
  id: 1,
  name: "Easy Frontend",
  "hero type": "iron man", // key with spaces
  [key]: 50, //tạo ra props tên là Power - lấy giá trị của biến key làm thuộc tính
  [`get${key}`]: function () {
    return 100;
  },
};
student.id; // 1
student.Power; // 50

//student.hero type; // syntax error
student["hero type"]; // 'iron man'

student.Power; // 50
student[key]; // 50

student.getPower(); // 100

/** Method properties */
const studentMethod = {
  sayHello: function () {
    console.log("Easy Frontend");
  }, // ES5
  getPower() {
    return 100;
  }, // ES6
};

/** Desctructuring - Rút trích thuộc tính*/
// object destructuring
const studentV2 = {
  ix: 1,
  nameS: "Easy Frontend",
};
const { ix, nameS } = studentV2;

// array destructuring
const numberList = [5, 10, 15];
const [a, b] = numberList;
// a = 5
// b = 10

// swap
let x = 10;
let y = 20;
[y, x] = [x, y]; // swap
console.log(x); // 20
console.log(y); // 10

// rename prop
// destructuring value
const studentV3 = {
  id: 1,
  name: "Easy Frontend",
};
const { id: studentId, nameX, ageX = 18 } = student;
console.log(studentId); // 1
console.log(ageX); // 18
console.log(id); // ReferenceError: id is not defined

/** Object.assign() */
const ax = { id: 1 };
const bx = { name: "Easy" };
const cx = Object.assign(a, b); // return to object ax
console.log(ax); // { id: 1, name: 'Easy' }
console.log(cx); // { id: 1, name: 'Easy' }
console.log(ax === cx); // true (same reference)

// clone object
const studentV4 = {
  id: 1,
  name: "Easy Frontend",
};
// spread operator
const alice = {
  ...student,
  name: "Alice",
};
// object.assign
const bob = Object.assign({}, student, { name: "Bob" });
