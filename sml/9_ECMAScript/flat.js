/** làm phẳng array
 *  [1,2,3,[4]] => [1,2,3,4]
 *  [1,2,[[3], 4]] => [1,2,[3],4] => [1,2,3,4]
 */

const arr = [1, 2, [3, 4]];
//Using flat()
console.log(arr.flat());
//Using reduce - concat
console.log(arr.reduce((res, value) => res.concat(value), []));
//decomposition syntax
const resultFlat = (arr) => [].concat(...arr);
console.log(resultFlat);

// Using a stack
const arr1 = [1, 2, [3, 4, [5, 6]]];
console.log([...arr1].length);
console.log(arr1.pop());

const arrayList = [1, 2, [3, 4, [5, 6]]];
function flatten(arrayList) {
  if (!Array.isArray(arrayList) || arrayList.length === 0) return [];

  const stack = [...arrayList];
  console.log("stack", stack);
  const res = [];

  while (stack.length) {
    // Xóa phần tử cuối cùng trong mảng và trả về phần tử đó
    const next = stack.pop();
    console.log("next", next);
    if (Array.isArray(next)) {
      console.log("...next", ...next);
      console.log("arrayList push to next", stack.push(...next));
    } else {
      console.log("res push to next", res.push(next));
    }
  }
  return res.reverse();
}

console.log(flatten(arrayList));