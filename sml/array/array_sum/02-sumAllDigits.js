export function sumAllDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  if (numberList.length === 1) return Number(numberList);
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      const res = String(numberList[i])
        .split("")
        .map(Number)
        .reduce((a, b) => a + b);
      sum += res;
    }
  }
  return sum;
}

console.log(sumAllDigits([123, 4]));
