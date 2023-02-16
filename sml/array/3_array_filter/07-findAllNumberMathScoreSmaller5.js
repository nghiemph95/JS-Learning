/** Tìm tất cả student có điểm toán nhỏ hơn 5 */
export function findAllNumber(studentList) {
  return studentList.filter((element) => element.math < 5);
}
