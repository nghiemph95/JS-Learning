export function findMinPositive(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  // let newArray = [];
  // let res;
  // for (let i = 0; i < numberList.length; i++) {
  //   if (numberList[i] > 0) {
  //     newArray.push(numberList[i]).length === 0;
  //     res = Math.min(...newArray);
  //   }
  // }
  // return res;

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

  // let newArray = [];
  // let res;
  // numberList.forEach((element) => {
  //   if (element > 0) {
  //     newArray.push(element).length === 0;
  //     res = Math.min(...newArray);
  //   }
  // });
  // return res;

  let res;

  res = Math.min(...numberList?.filter((element) => element > 0));
}
console.log(findMinPositive([-1, -2]));

// console.log(Math.min(...[-1, -5, 2, 6].filter((element) => element > 0)));
