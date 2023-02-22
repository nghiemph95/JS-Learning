function partition(numberList, left, right) {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  let i = left;
  let j = right;

  while (i <= j) {
    // find the first item that greater/equal than pivot
    while (numberList[i] < pivot) i++;
    // find the first item that smaller/equal than pivot
    while (numberList[j] > pivot) j--;

    if (i < j) {
      const temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }
    if (i <= j) {
      i++;
      j--;
    }
  }
  return i;
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
