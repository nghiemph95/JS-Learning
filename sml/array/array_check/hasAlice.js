function isAlice(student) {
  if (!student) return false;

  return student.gender === "female" && student.name.toLowerCase() === "alice";
}

/** for i */
function hasAliceV1(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  for (let i = 0; i < studentList.length; i++) {
    if (isAlice(studentList[i])) return true;
  }
  return false;
}

// const studentList = [
//   { id: 1, name: "Alice", gender: "male" },
//   { id: 2, name: "aliCE", gender: "female" },
//   { id: 3, name: "Easy Frontend", gender: "male" },
// ];

// console.log(hasAlice(studentList));

/** forEach */
function hasAliceV2(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  let check = false;
  studentList.forEach((element) => {
    if (isAlice(element)) check = true;
  });
  return check;
}

/** find */
function hasAliceV3(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return Boolean(studentList.find(isAlice));
}

/** findIndex */
export function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return studentList.findIndex(isAlice) > 0;
}
