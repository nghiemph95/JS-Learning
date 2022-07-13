export function mergeArray(a, b) {
  if (!Array.isArray(a, b) || (a.length === 0 && b.length === 0)) return [];

  if (b === true || a === true) return [];
  //   let res = [];
  //   res = a.concat(b).unique();
  return [...new Set([...a, ...b])];
}

console.log(mergeArray([1, 2, 3], [2, 3, 4]));
