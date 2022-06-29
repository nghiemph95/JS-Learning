/** Viết hàm findStudent(studentList) để tìm ra student đầu tiên có trong mảng có tất cả các điểm đều lớn
hơn hoặc bằng 5, tuy nhiên có một môn dưới 5. */

function studentCheck(student) {
  if (!student) return false;

  return (
    (student.marks.math < 5 &&
      student.marks.english >= 5 &&
      student.marks.programming >= 5) ||
    (student.marks.math >= 5 &&
      student.marks.english < 5 &&
      student.marks.programming >= 5) ||
    (student.marks.math >= 5 &&
      student.marks.english >= 5 &&
      student.marks.programming < 5)
  );
}

export function findStudent(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return;

  return studentList.find(studentCheck);
}

// const studentList = [
//   { id: 1, name: "Alice", marks: { math: 9, english: 9, programming: 5 } },
//   { id: 2, name: "Bob", marks: { math: 2, english: 3, programming: 5 } },
//   { id: 3, name: "John", marks: { math: 4, english: 7, programming: 9 } },
//   { id: 4, name: "Sarah", marks: { math: 2, english: 8, programming: 10 } },
// ];

// console.log(findStudent(studentList));
