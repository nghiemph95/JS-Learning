export function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const arr = [];

  let arrElement = [];
  for (let i = 0; i < numberList.length; i++) {
    arrElement.push(numberList[i]);
    if (
      arrElement.length > 0 &&
      (numberList[i] >= numberList[i + 1] || i === numberList.length - 1)
    ) {
      arrElement.length > 1 && arr.push(arrElement);
      arrElement = [];
    }
  }

  let newArr = [];

  arr.forEach((element) => {
    element = element.reduce((pre, cur) => {
      return pre + cur;
    });
    newArr.push(element);
  });
  return Math.max(...newArr);
}
console.log(findMaxSumArray([1, 2, 3, 0, 10, 20]));
