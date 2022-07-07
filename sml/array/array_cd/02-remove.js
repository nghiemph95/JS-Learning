export function remove(arr, k, n) {
  if (!Array.isArray(arr) || arr.length === 0) return;

  if (k < 0 || k >= arr.length) return arr;

  if (k === 0) return [];

  arr.splice(k, n);
  return arr;
}

console.log(remove([1, 2, 3], 0));
