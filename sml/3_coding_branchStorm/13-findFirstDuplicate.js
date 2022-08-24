export function findFirstDuplicate(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === numberList[i + 1]) {
      return numberList[i];
    }
  }
  return -1;
}
