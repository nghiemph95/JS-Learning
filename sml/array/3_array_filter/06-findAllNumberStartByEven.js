export function findAllNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  return numberList.filter((element) => String(element).charAt(0) % 2 !== 0);
}

// console.log(findAllNumber([234, 421, 123]));
