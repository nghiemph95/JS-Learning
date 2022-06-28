export function findLastNegativeOddV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  let newArray = [];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0 && numberList[i] < 0) {
      newArray.push(numberList[i]);
    }
  }
  return newArray[newArray.length - 1];
}

export function findLastNegativeOddV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  let newArray = [];
  numberList.forEach((element) => {
    if (element % 2 !== 0 && element < 0) {
      newArray.push(element);
    }
  });
  return newArray[newArray.length - 1];
}

export function findLastNegativeOdd(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  return numberList.slice(-1).find((e) => e % 2 !== 0 && e < 0);
}
console.log([-1, -3, -5].reverse());
