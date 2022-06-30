export function generateFibonaci(n) {
  const fiboArray = [];
  let firstElement = 0;
  let secondElement = 1;
  fiboArray.push(firstElement, secondElement);

  let thirdElement = firstElement + secondElement;
  while (thirdElement < n) {
    fiboArray.push(thirdElement);
    firstElement = secondElement;
    secondElement = thirdElement;
    thirdElement = firstElement + secondElement;
  }
  return fiboArray;
}

export function generateFibonaciV1(n) {
  let fiboArray = [0, 1];
  let data = [];

  for (let i = 2; i < n; i++) {
    fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
    res = fiboArray.concat(fiboArray[i]);
  }

  return res;
}

export function generateFibonaciV1(n) {
  return Array.from({ length: n }).reduce(
    (acc, _val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
}

// console.log(generateFibonaciV1(10));
