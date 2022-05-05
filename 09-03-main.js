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
}
