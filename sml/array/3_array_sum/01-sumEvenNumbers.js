/** Tính tổng các số chẵn mà nó lớn hơn số trước đó */
export function sumEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;
  let array = [];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > numberList[i - 1] && numberList[i] % 2 === 0) {
      array.push(numberList[i]);
      console.log(array);
    }
  }

  return array.reduce((a, b) => a + b);
}
// console.log(sumEvenNumbers([-10, -4, 2, 8, 5]));
