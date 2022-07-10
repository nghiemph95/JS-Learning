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
[1, 2, 3].every(function (elt, idx, arr) {
  var prev = arr[idx - 1];
  return !idx || elt === prev || elt === prev + 1;
});

console.log(idx);
