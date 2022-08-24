export function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  const arrList = [];

  let arrElement = [];

  for (let i = 0; i < numberList.length; i++) {
    const element = numberList[i];

    if (element % 2 === 0) arrElement.push(element);

    if (
      arrElement.length > 0 &&
      (element % 2 === 1 || i === numberList.length - 1)
    ) {
      arrList.push(arrElement);
      arrElement = [];
    }
  }

  return arrList;
}
