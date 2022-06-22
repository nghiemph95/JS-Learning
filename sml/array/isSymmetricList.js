export function isSymmetricList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i < numberList.length / 2; i++) {
    if (numberList[i] !== numberList[numberList.length - i - 1]) return false;
  }
  return true;
}

console.log(isSymmetricList([1, 2, 2, 1]));
