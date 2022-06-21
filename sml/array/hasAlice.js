function isAlice(student) {
  if (!student) return false;

  return student.gender === "female" && student.name.toLowerCase() === "alice";
}

function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  for (let i = 0; i < studentList.length; i++) {
    if (isAlice(studentList[i])) return true;
  }
  return false;
}

const studentList = [
  { id: 1, name: "Alice", gender: "male" },
  { id: 2, name: "aliCE", gender: "female" },
  { id: 3, name: "Easy Frontend", gender: "male" },
];

console.log(hasAlice(studentList));
