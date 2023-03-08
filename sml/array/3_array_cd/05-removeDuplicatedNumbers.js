/** Xoá các số trùng nhau trong mảng */
export function removeDuplicatedNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return numberList.filter((element) => {
    return numberList.lastIndexOf(element) === numberList.indexOf(element);
  });
}

// const arr = [1, 1, 2];

console.log(removeDuplicatedNumbers([1, 1, 2]));
