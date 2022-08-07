/** 1.Property shorthand - Gán props cho Object nhưng dạng rút gọn
 *  2.Computed property name
 *  3.Method properties
 *  4.Desctructuring
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
