/** Dãy số fibonaci nhỏ hơn n */
// export function generateFibonaci(n) {
//   const fiboArray = [];
//   let firstElement = 0;
//   let secondElement = 1;
//   fiboArray.push(firstElement, secondElement);

//   let thirdElement = firstElement + secondElement;
//   while (thirdElement < n) {
//     fiboArray.push(thirdElement);
//     firstElement = secondElement;
//     secondElement = thirdElement;
//     thirdElement = firstElement + secondElement;
//   }
//   return fiboArray;
// }

export function generateFibonaci(n) {
  const arr = [];

  let firstEl = 0;
  let secontEl = 1;
  arr.push(firstEl, secontEl);

  /** Calculation */
  let thirdEl = firstEl + secontEl;
  while (thirdEl < n) {
    arr.push(thirdEl);
    firstEl = secontEl;
    secontEl = thirdEl;
    thirdEl = firstEl + secontEl;
    
  }

  return arr;
}

console.log(generateFibonaci(100));

export function generateFibonaciV2(n) {
  let fiboArray = [0, 1];
  let data = [];

  for (let i = 2; i < n; i++) {
    fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
    res = fiboArray.concat(fiboArray[i]);
  }

  return res;
}

console.log(generateFibonaciV2(100));

export function generateFibonaciV1(n) {
  return Array.from({ length: n }).reduce(
    (acc, _val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
}

console.log(generateFibonaciV1(100));
