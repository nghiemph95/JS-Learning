/** Tìm student có điểm trung bình môn thấp nhất cuối cùng */
export function findLastStudentHavingMinAvg(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return;

  let minAvgScore = (studentList[0].math + studentList[0].english) / 2;

  for (let i = 1; i < studentList.length; i++) {
    if ((studentList[i].math + studentList[i].english) / 2 < minAvgScore) {
      minAvgScore = (studentList[i].math + studentList[i].english) / 2;
    }

    if (studentList.slice(studentList.indexOf(studentList[i])) !== "") {
      if (
        (studentList[i + 1].math + studentList[i + 1].english) / 2 <
        minAvgScore
      ) {
        minAvgScore =
          (studentList[i + 1].math + studentList[i + 1].english) / 2;
      }
    }

    return studentList[i + 1] ? studentList[i + 1] : studentList[i];
  }
}
const studentList = [
  { id: 1, name: "Alice", math: 9, english: 9 },
  { id: 2, name: "Bob", math: 5, english: 5 },
  { id: 3, name: "John", math: 5, english: 5 },
];
// console.log(findLastStudentHavingMinAvg(studentList));
// console.log(studentList[studentList.length - 1]);
