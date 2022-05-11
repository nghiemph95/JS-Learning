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
  if (!Array.isArray(arr) || typeof filterCallback !== "function") return;

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    // const arrList = arr[i];
    if (filterCallback(arr[i])) {
      newArr.push(arr[i]);
    }
    // if ((arrList) => arrList > 3)
  }

  return newArr;
}

console.log(arrFilter([1, 2, 3, 4, 5, 6, 7], (x) => x > 3));

/** reduce fn */
const result = [2, 3, 4].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  1
);
console.log(result);

// const hasInitialValue = !initialValue;
// const hasInitialValue = initialValue !== undefined;

// !null --> true
// !undefined --> true

/** reduce fn - for i */
function reduceFunc(arr, callBackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callBackFn !== "function")
    throw new Error("Invalid parameters");

  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error("InitialValue should have when array is empty!");
    }
    return initialValue;
  }

  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let previousValue = hasInitialValue ? initialValue : arr[0];

  for (let i = startIndex; i < arr.length; i++) {
    previousValue = callBackFn(previousValue, arr[i], i);
  }
  return previousValue;
}

console.log(
  reduceFunc(
    [2, 3, 4],
    (previousValue, currentValue) => previousValue + currentValue,
    0
  )
);

/** print number */
function printNumbers() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}
printNumbers();

function printNumbers() {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) console.log(i);
  }
}
printNumbers();

function printNumbers() {
  for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
}
printNumbers();

/** find max */
function findMaxI(numberList) {
  let max = numberList[0];

  for (i = 0; i < numberList.length; i++) {
    if (numberList[i] > max) {
      max = numberList[i];
    }
  }
  return max;
}

console.log(findMaxI([2, 3, 1]));

function findMaxForEach(numberList) {
  let max = numberList[0];

  numberList.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });

  return max;
}

console.log(findMaxForEach([2, 3, 1]));

function findMaxReduce(numberList) {
  // let max = numberList[0];

  // numberList.forEach((element) => {
  //   if (element > max) {
  //     max = element;
  //   }
  // });

  // return numberList.reduce((max, number) => (number > max ? number : max));
  return numberList.reduce((max, number) => {
    return number > max ? number : max;
  });
}
console.log(findMaxReduce([2, 3, 1]));

/** find longest word */
function findWordLongest(list) {
  let max = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i].length > max.length) {
      max = list[i];
    }
  }
  return max;
}
console.log(findWordLongest(["ab", "abc", "abcd"]));

function findWordLongest(list) {
  let max = list[0];

  list.forEach((element) => {
    if (element.length > max.length) {
      max = element;
    }
  });

  // for (let i = 0; i < list.length; i++) {
  //   if (list[i].length > max.length) {
  //     max = list[i];
  //   }
  // }
  return max;
}
console.log(findWordLongest(["ab", "abc", "abcd"]));

function findWordLongest(list) {
  return list.reduce((longestWord, currentWord) =>
    longestWord > currentWord ? longestWord : currentWord
  );
}
console.log(findWordLongest(["ab", "abc", "abcd"]));

/** create array in a range */
function createArrayInRangeV1(a, b) {
  if (a < -100 || b > 100) return -1;

  const range = Math.trunc(b - a) + 1;
  const arrayList = [];

  for (let i = 0; i < range; i++) {
    arrayList.push(a + i);
  }
  return arrayList;
}
console.log(createArrayInRangeV1(5, 7));

function createArrayInRangeV2(a, b) {
  if (a < -100 || b > 100) return -1;

  const length = b - a + 1;

  return Array.from({ length }, (x, i) => a + i); // ArrayLike = khoi tao array
}

console.log(createArrayInRangeV2(5, 10));

/** check number is Prime*/
function isPrimeV1(n) {
  if (n < 2 || n >= 1000) return false;

  for (i = 2; i <= Math.sqrt(n) + 1; i++) {
    if (n % i === 0) return false;
    break;
  }
  return true;
}

console.log(isPrimeV1(4));

function isPrimeV1(n) {
  if (n < 2 || n >= 1000) return false;

  for (i = 2; i < n - 1; i++) {
    if (n % i === 0) return false;
    break;
  }
  return true;
}

console.log(isPrimeV1(5));

/** show divisor list */
function getDivisorListV1(n) {
  if (n < 1 || n > 1000) return;
  const array = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      array.push(i);
    }
  }
  return array;
}

console.log(getDivisorListV1(10));

function getDivisorListV2(n) {
  if (n < 1 || n > 1000) return;

  const range = Math.trunc(n);

  const numberList = Array.from({ length: range }, (x, i) => i + 1);

  return numberList.filter((i) => n % i === 0);
}

console.log(getDivisorListV2(1));

function getDivisorListV3(n) {
  if (n < 1 || n > 1000) return;

  if (n === 1) return [1];

  const array = [];
  const createArray = Array.from({ length: Math.sqrt(n) }, (x, i) => i + 1);
  createArray.forEach(isDivisor);
  console.log(createArray);
  function isDivisor(i) {
    if (n % i === 0) array.push(i, n / i);
  }

  return array.sort((a, b) => a - b);
}

console.log(getDivisorListV3(1));

/** check perfect number*/
function isPerfectNumber(n) {
  if (n < 1 || n > 1000) return;
  let temp = 0;

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      temp = temp + i;
    }
  }

  if (temp === n && temp !== 0) return true;
  return false;
}

console.log(isPerfectNumber(6));

/** check transform Array Number */
/** for is */
function transformNumbersV1(numberList) {
  if (!Array.isArray(numberList)) return;
  if (numberList === []) return [];

  const newNumberList = [];

  for (let i = 0; i < numberList.length; i++) {
    newNumberList.push((numberList[i - 1] || 0) + (numberList[i + 1] || 0));
  }
  if (newNumberList.length === 1) return numberList;
  return newNumberList;
}
console.log(transformNumbersV1([1]));
/** forEach */
function transformNumbersV2(numberList) {
  if (!Array.isArray(numberList)) return;
  if (numberList === []) return [];
  if (numberList.length === 1) return numberList;
  const newNumberList = [];

  numberList.forEach((_, i) => {
    newNumberList.push((numberList[i - 1] || 0) + (numberList[i + 1] || 0));
  });

  return newNumberList;
}
console.log(transformNumbersV2([1, 2]));
/** map() */
function transformNumbersV3(numberList) {
  if (!Array.isArray(numberList)) return;
  if (numberList === []) return [];
  if (numberList.length === 1) return numberList;
  const newNumberList = [];

  numberList.map((_, i) => {
    newNumberList.push((numberList[i - 1] || 0) + (numberList[i + 1] || 0));
  });

  return newNumberList;
}
console.log(transformNumbersV3([1, 2, 3, 4]));
