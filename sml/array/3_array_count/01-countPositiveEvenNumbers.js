export function countPositiveEvenNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let count = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0 && numberList[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

export function countPositiveEvenNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.filter((element) => element > 0 && element % 2 === 0)
    .length;
}

export function countPositiveEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.reduce(
    (pre, cur) => (cur > 0 && cur % 2 === 0 ? pre + 1 : pre),
    0
  );
}

console.log(countPositiveEvenNumbers([-2, -1, 1, 2, 4]));
