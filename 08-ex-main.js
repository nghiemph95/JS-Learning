/** phép gán object */
const a = 5;
let b = a;
b = 10;
console.log(a);

const a1 = { name: "audi" };
const a2 = a1;
a2.name = "bmw";

console.log(a1.name);

/** clone object */
const student = {
  name: "Nghiem",
  age: 18,
};

const moreProps = {
  isHero: true,
  gender: "male",
};

//v1: using Object.assign()
const clonedStudent = Object.assign({}, student, moreProps);
console.log(clonedStudent);

//v2: using spread operator
const clonedStudent2 = {
  ...student,
  ...moreProps,
};
console.log(clonedStudent2);

console.log(first);
