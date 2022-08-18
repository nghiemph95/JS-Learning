/** Async function declaration */
async function func1() {}

/** Async function expression */
const func2 = async function () {};

/** Async arrow function */
const func3 = async () => {};

/** Async method definition in an object literal - Phương thức của 1 object */
const obj = { async say() {} };

/** await phải được đặt trong async
 * async function luôn luôn trả về Promise
 */

async function getNumber() {
  return 10;
}
getNumber(); // Hàm return về 1 Promise khi đó ko phải return về 10 mà return về Promise
