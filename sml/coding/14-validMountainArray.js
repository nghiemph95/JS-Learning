export function validMountainArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 3) return false;
  let maxIndex = 0;
  /** find the largest index of the larget element in array */
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] >= numberList[maxIndex]) {
      maxIndex = i;
    }
  }
  /** check whether max element is not the first or last element */
  if (maxIndex === numberList.length - 1 || maxIndex === 0) {
    return false;
  }
  let isMountainArray = true;
  /** check whether elements before the largest element are increasing order */
  for (let j = 0; j < maxIndex; j++) {
    if (numberList[j] >= numberList[j + 1]) {
      isMountainArray = false;
    }
  }
  /** check whether elements after the largest element are increasing order */
  for (let k = maxIndex; k < numberList.length - 1; k++) {
    if (numberList[k] < numberList[k + 1]) {
      isMountainArray = false;
    }
  }
  return isMountainArray;
}
