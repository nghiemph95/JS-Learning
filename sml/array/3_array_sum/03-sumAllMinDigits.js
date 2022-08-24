export function sumAllMinDigitsV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      sum += Math.min(...String(numberList[i]).split("").map(Number));
    }
  }
  return sum;
}

export function sumAllMinDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.reduce((sum, current) => {
    return (sum += Math.min(...String(current).split("").map(Number)));
  }, 0);
}

console.log(sumAllMinDigits([123]));
