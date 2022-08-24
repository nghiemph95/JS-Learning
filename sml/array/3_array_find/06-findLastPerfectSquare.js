export function findLastPrefectSquare(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  return numberList.reverse().find((e) => Math.trunc(Math.sqrt(e)) ** 2 === e);
}

// console.log(findLastPrefectSquare([4, 16, 25, 36, 40]));
// console.log([4, 16, 25, 36, 40].reverse());
