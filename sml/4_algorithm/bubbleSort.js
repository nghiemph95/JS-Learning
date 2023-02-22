/** BubbleSort: So sánh 2 phần tử liền kề, nếu phần tử nào lớn hơn thì sẽ hoán đổi vị trí sao cho
 * phần tử nhỏ hơn sẽ đứng trước phần tử lớn hơn
 */

function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  /** Chạy từ cuối mảng */
  for (let i = numberList.length - 1; i > 0; i--) {
    /** Chạy từ đầu mảng */
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
