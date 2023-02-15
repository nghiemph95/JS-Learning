/** Kiểm tra có student có id nào trong mảng không */
export function hasStudent(studentList, studentId) {
  for (let i = 0; i < studentList.length; i++) {
    for (const key in studentList[i]) {
      if (studentId === studentList[i][key]) {
        return true;
      }
      return false;
    }
  }
}

// console.log(hasStudent(studentList, 3));
