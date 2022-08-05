function partition(numberList, left, right) {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  let i = left;
  let j = right;

  while (i <= j) {
    //find the first item that smaller/equal than pivot
    while (numberList[i] > pivot) i++;
    //find the first item that greater/equal than pivot
    while (numberList[j] < pivot) j--;

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
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  //base condition, termination point
  if (left >= right) return numberList;

  const pivotPoint = partition(numberList, left, right);

  quickSort(numberList, left, pivotPoint - 1);
  quickSort(numberList, pivotPoint, right);

  return numberList;
}

console.log(quickSort([4, 2, 6, 5, 3, 9], 0, 5));
