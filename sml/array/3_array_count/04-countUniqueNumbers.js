/** Viết hàm countUniqueNumbers(numberList) để tìm ra có
 * bao nhiêu số khác nhau trong mảng. */
export function countUniqueNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  // let counts = {};
  // for (let i = 0; i < numberList.length; i++) {
  //   counts[numberList[i]] = 1 + (counts[numberList[i]] || 0);
  // }
  // return counts

  let count = 0;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] !== numberList[i + 1]) {
      count += 1;
    } else {
      count;
    }
  }

  return count;
}

console.log(countUniqueNumbersV2([1, 2, 3]));

export function countUniqueNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return new Set(numberList).size;
}
console.log(countUniqueNumbers([1, 1, 1]));

export function countUniqueNumbersV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const res = [];

  for (let i = 0; i < numberList.length; i++) {
    if (!res.includes(numberList[i])) res.push(numberList[i]);
  }

  return res.length;
}

export function countUniqueNumbersV5(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const count = {};
  for (let i = 0; i < numberList.length; i++) {
    count[numberList[i]] = true;
    console.log(count[numberList[i]]);
  }
  return Object.keys(count).length;
}

export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const count = numberList.reduce((count, number) => {
    count[number] = true;
    console.log(count[number]);
    return count;
  }, {});

  return Object.keys(count).length;
}

console.log(countUniqueNumbers([1, 2, 3]));
