/** Log variation */
console.log(
  "LOG: You properly just need to use me and no need to careothers >.<"
);
console.info("INFO: Javascript is easy");
console.debug("DEBUG: Nice");
console.warn("WARN: Beautiful");
console.error("ERROR: Lovely");

/** Multivalue */
const student = {
  id: 1,
  name: "Alice",
  age: 18,
};
const city = {
  id: 1,
  name: "HCMC",
};
// NOT GOOD
console.log(student);
console.log(city);
// BETTER
console.log({ student, city });

/** Log with variable */
const studentV1 = {
  id: 1,
  name: "Alice",
  age: 18,
};
console.log(`My student: ${studentV1} is lazy`);
// My student: [object Object] is lazy

const studentV2 = {
  id: 1,
  name: "Alice",
  age: 18,
};
console.log("My student: %o is lazy", studentV2);
// OK
console.log("Name: %s and Age: %i", studentV2.name, studentV2.age);
// Name: Alice and Age: 18
// GOOD
console.log(`Name: ${studentV2.name} and Age: ${studentV2.age}`);
// Name: Alice and Age: 18

/** Assert - Show log khi điều kiện log = false */
console.assert(1 === 1, "equal but not show in console");
console.assert(1 === 2, "not equal and show in console"); //Assertion failed: not equal and show in console
