export function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  if (numberList.length === 1) return 1;
  let count = 0;

  numberList.find((element) => {
    if (numberList.indexOf(element) > 0) {
      return count++;
    }
  });

  return count;
}
