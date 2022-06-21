export function hasFalsy(arr) {
  if (arr.length === 0) return false;

  return arr.every((element) => element === !element || element !== null);
}
// console.log(hasFalsy([false, ""]));
