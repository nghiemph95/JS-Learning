/** 1 promise có 3 trạng thái pending, fullfilled, rejected
 * nếu success: sử dụng .then() để lấy thông tin
 * nếu error: sử dụng .catch() để trả về error
 */

/** tạo promise */
const promise = new Promise((resolve, reject) => {});
console.log(promise);

/** retrieve promise value */
const promiseV1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve([1, 2, 3, 4]), 3000);
});
promiseV1
  .then((result) => console.log(result)) // kết quả sẽ láy theo giá trị resolve bên trên
  .catch((error) => console.log(error));

/** Error */
/** Always handle error when using promise. Luôn luôn handle error khi sử dụng promise */
const promiseV2 = new Promise((resolve, reject) => {
  reject(new Error("oops, something wrong!!!"));
});
promiseV2
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
