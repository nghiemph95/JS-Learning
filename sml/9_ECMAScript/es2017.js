/** finally 6/2017 */
/** async function */
//ES6
function main() {
  getAllStudents()
    .then((response) => {
      const { data, pagination } = response;
      console.log(data, pagination);
    })
    .catch((error) => {
      console.log(error);
    });
}

//ES2017
async function main() {
  try {
    const response = await getAllStudents();
    console.log(data, pagination);
  } catch (error) {
    console.log(error);
  }
}

/** string padding */
"1234".padStart(8); // ' 1234'
"1234".padStart(8, "*"); // '****1234'
"123456".padStart(8, "*"); // '**123456'
"1234".padEnd(8, "*"); // '1234****'
"12".padEnd(8, "*"); // '12******'

/** Object value */
Object.values({
  id: 1,
  name: "Easy Frontend",
  age: 18,
});
// [1, 'Easy Frontend', '18']
Object.keys({
  id: 1,
  name: "Easy Frontend",
  age: 18,
});
// get key and value
Object.entries({
  id: 1,
  name: "Easy Frontend",
  age: 18,
});
console.log(
  Object.entries({
    id: 1,
    name: "Easy Frontend",
    age: 18,
  })
);
//[ [ 'id', 1 ], [ 'name', 'Easy Frontend' ], [ 'age', 18 ] ]

/** Trailing commas - Dấu phẩy cuối cùng sau các phần tử ở Array, Object, Function*/
// Array - ES5
[1, 2, 3].length; // 3
[1, 2, 3, ,].length; // 4
const numberList = [1, 2, 3];
console.log(numberList); // [1, 2, 3]

// Object - ES5
const student = {
  id: 1,
  name: "Easy Frontend",
  age: 18, // <-- trailing comma
};

// Function - ES2017 (Nên sử dụng khi thay đổi 1 dòng trên git nhằm tránh tạo hơn 2 dòng khi sửa)
// function declaration
function createStudent({
  id,
  name,
  age,
  hobbies,
  isHero, // trailing comma
}) {
  console.log(id, name, age, hobbies, isHero);
}
// function call
createStudent({
  id: 1,
  name: "Easy Frontend",
  age: 18,
  hobbies: ["music", "coding"],
  isHero: false, // trailing comma
});
