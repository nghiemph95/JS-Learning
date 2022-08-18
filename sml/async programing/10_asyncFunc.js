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

// Muốn lấy giá trị của Promise thì biểu diễn như sau:
getNumber().then((n) => {
  console.log(n);
});

// Hoặc khi return về Promise thì nó sẽ sử dụng luôn
async function getNumber() {
  return Promise.resolve(10);
}
getNumber(); // it return a promise

/** Handle error */
async function getAllStudent() {
  try {
    // Đầu tiên nó lấy url
    const url = "http://js-post-api.herokuapp.com/api/students?_page=1";
    // fetch(url): là 1 Promise
    // await fetch(url): đứng đợi Promise resolve
    // trong trường hợp fetch thành công sẽ trả kết quả vể response. Trong qua trình đi load dữ liệu
    // hàm sẽ dựng lại tại dòng này cho đến khi thành công
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Trường hợp fetch có lỗi xảy ra sẽ nhảy vô catch
    console.log(error);
  }
}
