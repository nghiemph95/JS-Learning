/** Viết hàm countStudents(studentList, avgMark) để đếm số lượng student có điểm trung bình môn lớn hơn
hoặc bằng avgMark
Cách tính điểm trung bình môn:
Giả sử mình không biết trước sẽ có bao nhiêu môn
Dựa vào object marks để xác định, có bao nhiêu keys là bấy nhiêu môn và tính điểm trung bình môn
tương ứng.
Một student list sẽ đảm bảo là số lượng keys trong object marks sẽ giống nhau. */

export function countStudentsV1(studentList, avgMark) {
  if (!Array.isArray(studentList) || studentList.length === 0 || avgMark === 0)
    return;
  let count = 0;

  for (let i = 0; i < studentList.length; i++) {
    if (
      Object.values(studentList[i].marks).reduce((pre, cur) => pre + cur) /
        Object.values(studentList[i].marks).length >=
      avgMark
    ) {
      count++;
    }
  }
  return count;
}

export function countStudentsV2(studentList, avgMark) {
  if (!Array.isArray(studentList) || studentList.length === 0 || avgMark === 0)
    return;
  let count = 0;

  studentList.forEach((element) => {
    if (
      Object.values(element.marks).reduce((pre, cur) => pre + cur) /
        Object.values(element.marks).length >=
      avgMark
    ) {
      count++;
    }
  });
  return count;
}

export function countStudents(studentList, avgMark) {
  if (!Array.isArray(studentList) || studentList.length === 0 || avgMark === 0)
    return;
  //   let count = 0;

  const count = studentList.every((element, index) => {
    if (
      Object.values(element.marks).reduce((pre, cur) => pre + cur) /
        Object.values(element.marks).length >=
      avgMark
    ) {
      count[index] = true;
    }
  });
  return count;
}

const studentListV1 = { id: 1, name: "Alice", marks: { math: 8, english: 6 } };

console.log(Object.values(studentListV1.marks));
