function uniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return [...new Set(numberList)];
}

console.log(uniqueNumbers([1, 2, 2, 1, 3, 4]));

function getIntersectionSet(set1, set2) {
  const intersectionSet = new Set();

  for (const item of set1) {
    if (set2.has(item)) intersectionSet.add(item);
  }
  return intersectionSet;
}

const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4, 5]);
console.log(getIntersectionSet(set1, set2));

/** Set: Tập hợp những giá trị (value) (ko có key)
 * mỗi value là unique
 */
