export function insert(numberList, newNumber) {
  if (!Array.isArray(numberList)) return;

  if (numberList.length === 0) return Array.from(String(newNumber), Number);
  let index = 0;

  numberList.some((element, i) => {
    if (numberList[i] + 1 === numberList[i + 1]) {
      index = numberList.indexOf(numberList[i + 1]);
    } else {
      index = numberList.indexOf(numberList[i]);
    }
  });

  numberList.splice(index, 0, newNumber);
  return numberList.map(Number);
}
console.log(insert([1, 2, 4], 3));
