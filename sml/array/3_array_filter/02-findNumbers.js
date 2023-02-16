/** Tìm tất cả các số mà nó lớn hơn số đứng trước nó */
export function findNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 1) return [];

  let newArray = [];
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > numberList[i - 1]) {
      newArray.push(numberList[i]);
    }
  }
  return newArray;
}

export function findNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 1) return [];

  return numberList.filter((_, i) => numberList[i] > numberList[i - 1]);
}
// console.log(findNumbers([2, 5, 3, 7]));
