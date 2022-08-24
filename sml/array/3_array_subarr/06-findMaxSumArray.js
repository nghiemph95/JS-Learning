/** Viết hàm findMaxSumArray(numberList) để tìm ra mảng con tăng dần có tổng lớn nhất và trả về mảng
con đó. */
export function findMaxSumArrayV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

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

  return arr[0];
}

console.log(findMaxSumArrayV1([1, 2, 3, 0, 2, 4]));
