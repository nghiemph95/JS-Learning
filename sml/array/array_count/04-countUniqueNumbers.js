/** Viết hàm countUniqueNumbers(numberList) để tìm ra có
 * bao nhiêu số khác nhau trong mảng. */
export function countUniqueNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  // let counts = {};
  // for (let i = 0; i < numberList.length; i++) {
  //   counts[numberList[i]] = 1 + (counts[numberList[i]] || 0);
  // }
  // return counts

  let count = 0;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] !== numberList[i + 1]) {
      count += 1;
    } else {
      count;
    }
  }

  return count;
}

console.log(countUniqueNumbersV2([1, 2, 3]));

export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return new Set(numberList).size;
}
console.log(countUniqueNumbers([1, 1, 1]));
