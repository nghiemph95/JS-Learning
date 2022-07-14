export function countStudents(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;

  let count = 0;
  studentList.forEach((element) => {
    if (element.gender === "male") {
      count++;
    }
  });
  return count;
}
