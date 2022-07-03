/** Viết hàm countUniqueNumbers(numberList) để tìm ra có bao nhiêu số khác nhau trong mảng. */
export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let count = 0;
  let checkSample = numberList[0];
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] === checkSample) {
      checkSample = numberList[i];
      count++;
    }
  }
  return count;
}

function countUniqueNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let count = 0;
  let checkSample = numberList[0];
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] === checkSample) {
      checkSample = numberList[i];
      count++;
    }
  }
  return count;
}
console.log(countUniqueNumbers([1, 2, 3]));
