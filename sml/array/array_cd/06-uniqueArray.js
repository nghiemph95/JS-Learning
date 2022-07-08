export function uniqueArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  return [...new Set(numberList)];
}
