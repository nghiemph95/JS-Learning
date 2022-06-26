export function findMinPositive(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  let newArray = [];
  let res;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      newArray.push(numberList[i]).length === 0;

      res = Math.min(...newArray);
    }
  }
  return res;

  // let newArray = [];
  // for (let j = 0; j < numberList.length; j++) {
  //   if (numberList[j] > 0) {
  //     newArray.push(numberList[j]).length === 0;
  //   }
  // }

  // let min = newArray[0];

  // for (let i = 1; i < newArray.length; i++) {
  //   if (newArray[i] < min) {
  //     min = newArray[i];
  //   }
  // }
  // return min;
}
console.log(findMinPositive([-1, -5]));
