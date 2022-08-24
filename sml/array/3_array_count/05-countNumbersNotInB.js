/** Viết hàm countNumbersNotInB(a, b) để đếm
 * có bao nhiếu số xuất hiện trong mảng a,
 *  mà không có trong mảng b */
export function countNumbersNotInBV1(a, b) {
  if (!Array.isArray(a, b) && a.length === 0 && b.length === 0) return 0;

  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let m = 0; m < b.length; m++) {
      if (a[i] !== b[m]) {
        continue;
      }
    }
  }

  return count;
}

// console.log(countNumbersNotInB([1, 2, 3], [4, 5]));

export function countNumbersNotInBV2(a, b) {
  if (!Array.isArray(a, b) && a.length === 0 && b.length === 0) return 0;

  return a.filter((element) => !b.includes(element)).length;
}

export function countNumbersNotInB(a, b) {
  if (!Array.isArray(a, b) && a.length === 0 && b.length === 0) return 0;
  let count = 0;
  a.filter((element) => {
    if (b.indexOf(element) < 0) {
      count++;
    }
  });

  return count;
  
}
// console.log(countNumbersNotInB([1, 2, 3], [3, 4, 5]));
