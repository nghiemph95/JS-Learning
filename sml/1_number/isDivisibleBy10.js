/** Kiểm tra số có tổng các chữ số chia hết cho 10 */
export function isDivisibleBy10(n) {
  const array = Array.from(String(n), Number);

  const sum = array.reduce((pre, cur) => pre + cur);

  return sum % 10 ? false : true;
}
