//finallied 6/2018

/** Rest/Spread properties for objects */
//ES6 - Rest element (Gom lại)
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1
// second = 2
// const rest = [3, 4, 5];

//ES6 - Spread element (Tách ra)
const numberList1 = [1, 2, 3];
const numberList2 = [4, 5, 6];
const mergedList = [...numberList1, ...numberList2, 7, 8, 9];
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

//ES2018 - Rest properties
const student = {
  id: 1,
  name: "Easy Frontend",
  isHero: false,
};
const { id, ...rests } = student;
// id = 1
// rests = { name: 'Easy Frontend', isHero: false }

//ES2018 - Spread propeties
const alice = {
  id: 1,
  name: "Alice",
};
const bob = {
  ...alice,
  name: "Bob",
};

/** Asynchonous */
// Syntax: for-await-of
async function fetchData() {
  const studentList = [];
  const pageList = [1, 2, 3, 4];
  for await (const page of pageList) {
    const url = `https://js-post-api.herokuapp.com/api/students?
    _page=${page}`;
    console.log("-------------");
    console.log("Start", new Date().getTime(), url);
    const response = await fetch(url);
    const responseJSON = await response.json();
    studentList.push(responseJSON.data);
    console.log("End", new Date().getTime(), studentList);
  }
}
fetchData();

/** Promise.prototype.finally() */
fetch("file.json")
  .then((data) => data.json()) // Success
  .catch((error) => console.error(error)) // Fail
  .finally(() => console.log("finished")); // Succes + Fail
