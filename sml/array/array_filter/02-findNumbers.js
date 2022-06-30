export function findNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 1) return [];

  let newArray = [];
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > numberList[i - 1]) {
      newArray.push(numberList[i]);
    }
  }
  return newArray;
}

// console.log(findNumbers([2, 5, 3, 7]));
