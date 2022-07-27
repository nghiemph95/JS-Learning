export function mergeArrayV1(a, b) {
  if (!Array.isArray(a, b) || (a.length === 0 && b.length === 0)) return [];

  if (b === true || a === true) return [];

  return [...new Set([...a, ...b])];
}

export function mergeArray(a, b) {
  if (!Array.isArray(a, b) || (a.length === 0 && b.length === 0)) return [];

  if (b === true || a === true) return [];

  return a.concat(b).filter((element, i) => a.concat(b).indexOf(element) === i);
}

console.log(mergeArray([1, 2, 3], [2, 3, 4]));
