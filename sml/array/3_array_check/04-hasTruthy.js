/** Kiểm tra có giá trị truthy nào có trong mảng không */
export function hasTruthy(arr) {
  if (arr.length === 0) return false;

  return arr.every((element) => element);
}

console.log(hasTruthy([true, 123]));
