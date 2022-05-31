export function isIncreasingNumber(n) {
  if (n < 10) return false;

  const numberList = n.toString();

  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] <= numberList[i - 1]) return false;
  }
  return true;
}

console.log(isIncreasingNumber(112));
