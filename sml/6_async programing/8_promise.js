/** 1 promise có 3 trạng thái pending, fullfilled, rejected
 * nếu success: sử dụng .then() để lấy thông tin
 * nếu error: sử dụng .catch() để trả về error
 */

/** Một object Promise đại diện cho một giá trị ở thời điểm hiện tại có thể chưa tồn tại,
 * nhưng sẽ được xử lý và có giá trị vào một thời gian nào đó trong tương lai. */

/** tạo promise */
const promise = new Promise((resolve, reject) => {});
console.log(promise);

/** retrieve promise value */
/** Chúng ta bắt đầu với việc khởi tạo một đối tượng Promise và truyền vào đó một hàm callback.
 * Hàm callback này sẽ nhận 2 tham số là resolve và reject, với cả 2 tham số đều có kiểu là hàm (function).
 * Tất cả các code bất đồng bộ sẽ nằm trong hàm callback này.
 * Nếu mọi thứ thành công, Promise sẽ được hoàn thành và hàm resolve sẽ được gọi.
 * Trong trường hợp có lỗi, hàm reject sẽ được gọi với một đối tượng Error, nhằm xác định rằng Promise này đã bị không thành công. */
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

/** Promise method */
const b = new Promise((resolve) => {
  resolve("BBB");
});
const promiseA = Promise.resolve("AAA");
const promiseB = Promise.resolve(b);
Promise.all([promiseA, promiseB])
  .then(([resultA, resultB]) => {
    console.log(resultA, resultB);
  })
  .catch((error) => console.log(error));

/** Ngoài ra promise còn thêm finally */
Promise.resolve("tada")
  .then((message) => console.log(message))
  .catch((error) => console.log(error))
  .finally(() => {
    // usually we hide loading here - Tức là nếu thành công hoặc thất bại thì mình muốn xử lý ntn tùy ý
  });

/** Promise chaining - Dùng để thay thế cho callback hell khi gọi lại kết quả của trước đó*/
Promise.resolve(5)
  .then((n) => n * 2) // 10
  .then((n) => Promise.resolve(n * 2)) // 10*2=20
  .then((n) => {
    const finalNumber = n + 10; // 20 + 10 = 30
    console.log(finalNumber);
    return finalNumber;
  })
  .catch((error) => console.log(error));

// Áp dụng với fetch
fetch("https://js-post-api.herokuapp.com/api/students?_page=1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/** Fake API */

// studentApi.js
const studentApi = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          //Fake API
          data: [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
          ],
          pagination: {
            _total: 2,
            _page: 1,
            _limit: 10,
          },
        });
      }, 1000);
    });
  },
};

// app.js
studentApi
  .getAll()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
