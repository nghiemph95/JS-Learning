export function findFirstPositiveEvenV1(numberList) {
  if (!Array.isArray(numberList) || numberList === 0) return;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0 && numberList[i] % 2 === 0) return numberList[i];
  }
}

export function findFirstPositiveEvenV2(numberList) {
  if (!Array.isArray(numberList) || numberList === 0) return;
  let res;
  numberList.forEach((e) => {
    if (e > 0 && e % 2 === 0) {
      res = e;
    }
  });

  return res;
}

export function findFirstPositiveEven(numberList) {
  if (!Array.isArray(numberList) || numberList === 0) return;

  return numberList.find((e) => e > 0 && e % 2 === 0);
}
/** filter trả về 1 mảng mới, trường hợp này không dùng được */
export function findFirstPositiveEvenV3(numberList) {
  if (!Array.isArray(numberList) || numberList === 0) return;

  return numberList.filter((e) => e > 0 && e % 2 === 0);
}
// console.log(findFirstPositiveEven([1, 4, 5]));
