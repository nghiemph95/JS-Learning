/** Kiểm tra số có tổng của 2 chữ số bằng số cho trước */
export function hasTwoDigitsWithSum(n, sum) {
  const array = Array.from(String(n), Number);

  const total = array.reduce((pre, cur) => pre + cur);

  return total === sum ? true : false;
}
