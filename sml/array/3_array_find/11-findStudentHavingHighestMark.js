/** Tìm student có điểm môn toán lớn nhất đầu tiên */
export function findStudentHavingHighestMarkV1(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return;
  let max = studentList[0].math;
  for (let i = 1; i < studentList.length; i++) {
    if (studentList[i].math > max) {
      max = studentList[i].math;
    }
    return studentList[i];
  }
}

export function findStudentHavingHighestMark(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return;

  return studentList.find((element) => element.math > studentList[0].math);
}

// const studentList = [
//   { id: 1, name: "Alice", math: 9 },
//   { id: 2, name: "Bob", math: 10 },
//   { id: 3, name: "John", math: 10 },
// ];

// console.log(findStudentHavingHighestMark(studentList));
