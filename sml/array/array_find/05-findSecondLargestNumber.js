export function findSecondLargestNumber(numberList) {
  if (
    !Array.isArray(numberList) ||
    numberList.length === 0 ||
    numberList.length === 1
  )
    return;

  let newArray = [];
  let max = numberList[0];

  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > max) {
      max = numberList[i];
    }
  }

  const index = numberList.indexOf(max);

  let maxi = numberList[0];
  if (index > -1) {
    numberList.splice(index, 1);

    for (let m = 1; m < numberList.length; m++) {
      if (numberList[m] > maxi) {
        maxi = numberList[m];
      }
    }
  }

  return maxi;
}

console.log(findSecondLargestNumber([1, 2, 3]));
