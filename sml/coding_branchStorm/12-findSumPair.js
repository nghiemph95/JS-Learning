export function findSumPair(numberList, targetSum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let hastMap = {};
  let result = [];

  for (let i = 0; i < numberList.length; i++) {
    if (hastMap[numberList[i]]) {
      result.push([hastMap[numberList[i]], numberList[i]]);
    } else {
      hastMap[targetSum - numberList[i]] = numberList[i];
    }
  }
  return result.flat(1);
}

console.log(findSumPair([3, 3, 2, 1], 6));
