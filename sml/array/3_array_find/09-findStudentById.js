/** Tìm vị trí của student có id cho trước */
export function findStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;

  //   for (let i = 0; i < studentList.length; i++) {
  //     if (studentList[i].id === studentId) return i;
  //   }
  //   return -1;

  return studentList.findIndex((element) => element.id === studentId);
}
