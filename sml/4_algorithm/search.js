/** Có 2 dạng tìm kiếm:
 * 1. Tìm kiếm tuyến tính (Linear Search): tìm kiếm từng thằng cho đến cuối mảng
 * 2. Tìm kiếm nhị phân (Binary Search): tìm kiếm nguyên 1 mảng -> giới hạn xuống nữa mảng -> đến khi tìm kiếm đc thì thôi
 */

function binarySearch(numberList, target) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  let left = 0;
  let right = numberList.length - 1;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);

    if (numberList[mid] === target) return mid;

    if (target > numberList[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 0)); //-1
console.log(binarySearch([1, 2, 3, 4, 5], 1));
console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6)); //-1
