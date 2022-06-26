export function hasOddNumberDivisibleBy3(numberList) {
  if (!Array.isArray(numberList)) return false;

  return (
    numberList.filter((element) => element % 2 !== 0 && element % 3 === 0)
      .length > 0
  );
}
// console.log(hasOddNumberDivisibleBy3([1, 6, 9]));
