/** Viết hàm findMissingNumber(numberList, n) để tìm ra con số bị thiếu trong dãy số [5..n] */
export function findMissingNumber(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  const arr = Array.from({ length: n - 5 + 1 }, (_, i) => 5 + i);

  return Number(arr.filter((element) => !numberList.includes(element)));
}

console.log(findMissingNumber([5, 6, 8, 9, 10], 10));

// console.log(String([8]).map(Number));
