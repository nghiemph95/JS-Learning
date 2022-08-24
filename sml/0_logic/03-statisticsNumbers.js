export function statisticsNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  const check = {};
  String(numberList)
    .split(",")
    .forEach((element) => {
      if (check[element]) {
        check[element] += 1;
      } else {
        check[element] = 1;
      }
    });
  return check;
}

console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));
