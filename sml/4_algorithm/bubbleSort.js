function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) {
        // swap bubble sort - recommend
        // const temp = numberList[j];
        // numberList[j] = numberList[j + 1];
        // numberList[j + 1] = temp;

        // array destructuring
        [numberList[j + 1], numberList[j]] = [numberList[j], numberList[j + 1]];
      }
    }
  }

  console.log(numberList);
  return numberList;
}

bubbleSort([1]);
bubbleSort([2, 1, 4]);
bubbleSort([2, 1, 4, 6, 4, 7, 9]);
