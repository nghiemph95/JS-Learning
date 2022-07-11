/** Viết hàm findAllIncreasingSubArr(numberList) để tìm ra tất cả các mảng con tăng dần có trong mảng
numberList. */
export function findAllIncreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  const arr = [];

  let arrElement = [];
  for (let i = 0; i < numberList.length; i++) {
    arrElement.push(numberList[i]);
    if (
      arrElement.length > 0 &&
      (numberList[i] >= numberList[i + 1] || i === numberList.length - 1)
    ) {
      arrElement.length > 1 && arr.push(arrElement);
      arrElement = [];
    }
  }

  return arr;
}

console.log(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10]));
