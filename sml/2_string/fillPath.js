/** Thay thế param thay value tương ứng */
export function fillPath(path, params) {
  if (path.length <= 0 || typeof params !== "object") return "";

  for (const key in params) {
    path = path.replace(`:${key}`, params[key]);
  }
  return path;
}

// console.log(
//   fillPath("/categories/:categoryId/products/:productId", {
//     categoryId: 1,
//     productId: 2,
//   })
// );

// const arrObj = {
//   categoryId: 1,
//   productId: 2,
// };

// const arr = Object.values(arrObj);
// console.log(arr);

// for (const key in arrObj) {
//   //   const array = [];
//   console.log(key);
// }

// console.log("/categories/:categoryId/products/:productId".split("/"));
