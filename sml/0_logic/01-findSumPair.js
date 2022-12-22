/** Viết hàm findSumPair(numberList, targetSum) để tìm ra 2 số trong mảng numberList có tổng bằng
targetSum */
export function findSumPair(numberList, targetSum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return numberList.filter((element, i) => {
    if (targetSum - element === element) {
      return false;
    } else if (numberList.includes(targetSum - element)) {
      return true;
    }
  });
}

console.log(findSumPair([1, 1, 2], 2));

console.log([1, 2].slice(1));
