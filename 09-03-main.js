/** find first even: find fn */
function findFirstEven(arr, callBackFn) {
  if (!Array.isArray(arr)) return undefined;

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (callBackFn(number, i)) {
      return number;
    }
  }

  return undefined;
}

console.log(findFirstEven([1, 9, 3, 4, 5], (x) => x % 2 === 0));

/** map fn */
function mapArr(arr, arrCallBack) {
  if (!Array.isArray(arr) || typeof arrCallBack !== "function")
    return undefined;

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const arrList = arr[i];
    const newElement = arrCallBack(arrList, i);
    newArr.push(newElement);
  }

  return newArr;
}

console.log(mapArr([1, 2, 3, 4, 5], (x) => x + 1));
// use unary operator: toán tử 3 ngôi
console.log(
  mapArr([1, 2, 3, 4, 5, 6], (x, idx) => (idx % 2 === 0 ? x + 1 : x * 2))
);

/** filter fn */
function arrFilter(arr, filterCallback) {
  if (!Array.isArray(arr) || typeof filterCallback !== "function")
    return undefined;

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const arrList = arr[i];
    if (filterCallback(arrList, i)) {
      newArr.push(arrList);
    }
  }

  return newArr;
}

console.log(arrFilter([1, 2, 3, 4, 5, 6, 7], (x) => x > 3));
console.log(first);
