export function insert(arr, newItem, index) {
  if (!Array.isArray(arr) || arr.length === 0) return;

  // if (index <= 0) {
  //   arr.unshift(newItem);
  // } else {
  //   arr.splice(index, 0, newItem);
  // }

  index <= 0 ? arr.unshift(newItem) : arr.splice(index, 0, newItem);
  return arr;
}

console.log(insert([1, 2, 3], 0, -1));

// const arr = [1, 2, 3];
// insert(arr, -1, 0);
// console.log(arr);

// const array = [1, 2, 3];
// console.log(array.splice(0, 0, 1));

// function insertAt(array, index, elementsArray) {
//   array.splice(index, 0, elementsArray);
// }

// const num = [1, 2, 3, 6, 7, 8];

// insertAt(num, -1, 4);

// console.log(num);
