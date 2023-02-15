/** Kiểm tra mảng có tăng dần không */
export function isIncreasingNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  /** for i  */
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] < numberList[i + 1]) return true;
  }
  return false;

  /** forEach */
  let check = false;
  numberList.forEach((_, i) => {
    if (numberList[i] < numberList[i + 1]) check = true;
  });
  return check;

  /** find */
  //   return Boolean(
  //     numberList.find((_, i) => {
  //       numberList[i] < numberList[i + 1];
  //     })
  //   );
}
