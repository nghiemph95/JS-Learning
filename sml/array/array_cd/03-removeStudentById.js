export function removeStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return;

  studentList.splice(studentId - 1, 1);
  return studentList;
}

const studentList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

console.log(removeStudentById(studentList, 3));
