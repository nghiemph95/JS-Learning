/** Kiểm tra mảng có số fibonaci nhỏ hơn 100 không */
export function hasFibonaciNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let array = [0, 1];
  let newArray = [];

  for (let i = 2; i <= 11; i++) {
    array[i] = array[i - 1] + array[i - 2];
    newArray.push(array[i]);
  }

  for (let i = 0; i < numberList.length; i++) {
    const element = numberList[i];
    for (let m = 0; m < newArray.length; m++) {
      if (element === newArray[m]) return true;
    }
  }
  return false;
}

// console.log(hasFibonaciNumber([0, 1, 2, 3]));
// console.log(hasFibonaciNumber([4, 6, 7]));
