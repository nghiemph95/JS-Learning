/** Đếm số từ trong câu */
export function countWords(str) {
  if (str === "") return 0;

  return str.split(" ").length;
}
