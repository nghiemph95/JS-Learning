/** Xoá các số trùng nhau nhưng giữ lại một số */
export function uniqueArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;
  //   First, convert an array of duplicates to a Set.
  //   The new Set will implicitly remove duplicate elements.
  //   Then, convert the set back to an array.
  return [...new Set(numberList)];
}
