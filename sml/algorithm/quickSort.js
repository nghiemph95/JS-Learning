function partition(numberList, left, right) {
  const mid = left + Math.trunc((left + right) / 2);
}

function quickSort(numberList, left, right) {
  //base condition, termination point
  if (left >= right) return numberList;

  const pivotPoint = partition(numberList, left, right);

  quickSort(numberList, left, pivotPoint - 1);
  quickSort(numberList, pivotPoint, right);

  return numberList;
}

console.log(quickSort([1], 0, 0));
console.log(quickSort([1, 2], 0, 1));
console.log(quickSort([1, 2, 1], 0, 2));
console.log(quickSort([1, 2, 1, 3], 0, 3));
console.log(quickSort([4, 1, 2, 5], 0, 3));
console.log(quickSort([4, 2, 6, 5, 3, 9], 0, 5));
