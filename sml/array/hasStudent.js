export function hasStudent(studentList, studentId) {
  for (let i = 0; i < studentList.length; i++) {
    for (const key in studentList[i]) {
      if (studentId === studentList[i][key]) {
        return true;
      }
      return false;
    }
  }
  const studentList = [
    { id: 1, name: "Easy" },
    { id: 2, name: "Frontend" },
  ];
}

// console.log(hasStudent(studentList, 3));
