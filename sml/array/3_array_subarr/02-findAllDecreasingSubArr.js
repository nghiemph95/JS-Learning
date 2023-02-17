/** Viết hàm findAllDecreasingSubArr(numberList) để tìm ra tất cả các mảng con giảm dần có độ dài ít nhất
3 phần tử. */
export function findAllDecreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  const arr = [];
  let arrElement = [];

  for (let i = 0; i < numberList.length; i++) {
    arrElement.push(numberList[i]);
    
    if (numberList[i] < numberList[i + 1] || i === numberList.length - 1) {
      arrElement.length >= 3 && arr.push(arrElement);
      arrElement = [];
    }
  }
  return arr;
}
// console.log(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20]));
