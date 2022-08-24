export function hasEvenNumberGreaterThanN(arr, n) {
  if (!Array.isArray(arr) || n === 0) return false;

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0 && arr[i] > n) {
  //       return true;
  //     }
  //   }
  //   return false;
  //   const newArr = [];
  //   arr.forEach((element) => {
  //     if (element % 2 === 0 && element > n) {
  //       newArr.push(element);
  //     }
  //   });

  //   return newArr.includes();

  return arr.filter((element) => element % 2 === 0 && element > n).length > 0;
}

// console.log(hasEvenNumberGreaterThanN([2, 3, 4], 5));

// console.log([2, 3, 4].forEach(element => {
//     if (element %2 === 0 && element > n)
// }));
