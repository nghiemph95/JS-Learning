export function mostFrequent(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  if (new Set(numberList).size === numberList.length) {
    return numberList[0];
  } else {
    return numberList.find((e) => {
      if (numberList.indexOf(e) > 0) {
        return e;
      }
    });
  }
}
console.log(mostFrequent([2, 1, 3]));
