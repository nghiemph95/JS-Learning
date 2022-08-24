export function sumAllDigitsV1(numberList) {
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

export function sumAllDigitsV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  if (numberList.length === 1) return Number(numberList);
  let sum = 0;

  numberList.forEach((element) => {
    if (element > 0) {
      const res = String(element)
        .split("")
        .map(Number)
        .reduce((a, b) => a + b);
      sum += res;
    }
  });
  return sum;
}

export function sumAllDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  if (numberList.length === 1) return Number(numberList);

  return numberList.reduce((pre, cur) => {
    if (cur > 0) {
      const res = String(cur)
        .split("")
        .map(Number)
        .reduce((a, b) => a + b);
      return (pre += res);
    }
  }, 0);
}

console.log(sumAllDigits([123, 4]));
