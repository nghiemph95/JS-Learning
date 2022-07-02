/** Viết hàm countNumbers(numberList) để đếm xem trong mảng có bao nhiêu số mà nó nhỏ hơn số đừng
liền trước của nó. */

export function countNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let count = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > numberList[i + 1]) {
      count++;
    }
  }
  return count;
}

export function countNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.filter((_, i) => numberList[i] > numberList[i + 1]).length;
}
