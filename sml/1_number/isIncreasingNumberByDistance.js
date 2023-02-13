/** Kiểm tra số tăng dần đều theo khoảng cách cho trước */
export function isIncreasingNumberByDistance(n, x) {
  if (n < 10) return false;

  const numString = n.toString();

  for (let i = 1; i <= numString.length; i++) {
    if (numString[i + 1] - numString[i] === x) return true;
  }
  return false;
}
console.log(isIncreasingNumberByDistance(123, 1));
