/** JavaScript Engine (V8): là chương trình chuyển đổi mã JavaScript thành mã máy hoặc cấp thấp. Chúng tuân theo Tiêu chuẩn ECMAScript xác định các tính năng và quy trình thực thi.
 *   Take code JS (Lấy mã nguồn)
 * -> Parse it (Phân tích cú pháp)
 * -> Abstract syntax tree (Tạo ra một cây cú pháp trừu tượng từ mã nguồn)
 * -> generate bytecode (V8 sẽ tạo ra 1 mã bytecode từ cây cú pháp, trình biên dịch có thể hiểu được bytecode từ cây cú pháp)
 * -> get feedback (V8 tạo đồ thị từ mã bytecode)
 * -> optimize & compile it (thay thế các phần bytecode bằng mã máy được tối ưu hóa)
 * -> CPU */

/** ECMAScript Engines:
 * - Chrome: V8
 * - NodeJS: V8
 * - Mircrosoft Edge: V8
 * - Firefox: Spider Monkey
 * - Safari: JavaScript Core
 */

/** JIT: Just in Time : Kết hợp Compiler(Compile 1 lần) và Interpreter(Compiler từng dòng) */

/** Memory heap: Vùng nhớ lưu trữ biến , object, array....
 *  Call Stack: Mỗi lần gọi 1 cái hàm, hàm đó sẽ đc push vào call stack, nếu hàm đó đc thực thi xong sẽ pop khỏi call stack
 *  Web APIs : Trong trường hợp call stack ko xử lý hoặc ko hiểu một số hàm trong call stack nó sẽ đẩy
 * qua Web APIs. Ví dụ: xử lý DOM, AJAX, setTimeout, setInterval
 *  Khi Web APIs làm xong, sẽ có 1 số hàm cần thực thi thì sẽ đưa vô callback Queue
 *  Khi Call Stack empty (tức là xử lý xong các hàm trong script) thì evet loop sẽ đẩy hàm trong Callback queue lên Call Stack
 */

/** Call Stack: Vùng nhớ đặc biệt trên chip máy tính nhằm để phục vụ thực thi các dòng lệnh (cụ thể ở đây là các hàm). Stack là hàng đợi theo kiểu LIFO (Last In First Out) nghĩa là cái gì vào cuối thì ra đầu.
    Heap: vùng nhớ dùng để chứa kết quả tạm thời để thực thi các hàm trong stack.
    Callback Queue / Message Queue: khi các dòng lệnh cần thời gian chờ, ta sẽ khai báo các function callback xử lý sau khi dòng lệnh đó đã hoàn thành. Thì các task đó sẽ được đẩy vào đây. Queue là hàng đợi theo kiểu FIFO (First In First Out) có nghĩa cái gì vào trước là xử lý trước.
    Event Loop: có thể giải thích đơn giản là nó là một vòng lặp vô tận, và chỉ 1 công việc duy nhất 
    là lấy các task từ Call Stack hoặc Callback Queue. 
    Đầu tiên sẽ xử lý CallStack trước, sau khi Call Stack trống thì nó sẽ kiểm tra Callback Queue để thực hiện. 
*/

/** Bất cứ khi nào một hàm không đồng bộ được gọi, nó sẽ được gửi đến một API của trình duyệt  */
/** Promise queue (Microtask) có độ ưu tiên (precedence) cao hơn Callback Queue(Macrotask) */
console.log("a");

setTimeout(() => console.log("b"), 0);

new Promise((resolve, reject) => {
  console.log("f");
  resolve(); // promise đã được resolve state nên console.log("c") sẽ được add to microtask queue
}).then(() => {
  console.log("c");
});

console.log("d");
// a -> f -> d -> c -> b

/** Ví dụ khác về Promise 01*/
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});
// promise1 luôn luôn bị pending state, cho nên console.log(3) sẽ ko đc executed
promise1.then(() => {
  console.log(3);
});

console.log(4);
// 1 -> 4

/** Ví dụ về Promise 02*/
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve("resolve1");
});

const promise2 = promise.then((res) => {
  console.log(res); // res đc add vào microtask (callback Queue) nên sẽ out ra cuối cùng
});
console.log("promise:", promise);
console.log("promise2:", promise2);
// 1 -> promise: Promise {<resolved>: "resolve1"} -> promise2: Promise {<pending>}

/** Ví dụ về Promise 03*/
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

fn().then((res) => {
  console.log(res); // res đc add vào microtask (callback Queue) nên sẽ out ra cuối cùng
});

console.log(2);
// 1 -> 2 -> 'success'

/** Ví dụ về Promise 04 */
const promiseTest = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promiseTest.then((res) => {
  console.log(res);
});

console.log(4);
// 1 -> 2 -> 4 -> timerStart -> timerEnd -> success

/** Ví dụ về setTimeout() */
const timer1 = setTimeout(() => {
  console.log("timer1");

  const timer3 = setTimeout(() => {
    console.log("timer3");
  }, 0);
}, 0);

const timer2 = setTimeout(() => {
  console.log("timer2");
}, 0);

console.log("start");
// 1. Macrotask queue -> console.log('timer1) && timer3
// 2. Macrotask queue -> timer2
// 3. Macrotask queue -> console.log('start')
// Result: start -> timer1 -> timer2 -> timer3

/** Ví dụ về setTimeout() 02 */
/** setTimeout() is a macrotask, Promise.then is a microtask */
/** microtask ưu tiên cao hơn macrotask */
const timer01 = setTimeout(() => {
  console.log("timer1");
  const promise1 = Promise.resolve().then(() => {
    console.log("promise1");
  });
}, 0);

const timer02 = setTimeout(() => {
  console.log("timer2");
}, 0);

console.log("start");
// start -> timer1 -> promise1 -> timer2

/** Ví dụ về setTimeout() 03 */
const promise01 = Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});

const timer001 = setTimeout(() => {
  console.log("timer1");
  const promise2 = Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);

console.log("start");
// start -> promise1 -> timer1 -> promise2 -> timer2

/** Ví dụ về setTimeout() 04 */
const promise001 = new Promise((resolve, reject) => {
  const timer1 = setTimeout(() => {
    resolve("success");
  }, 1000);
});

const promise002 = promise001.then(() => {
  throw new Error("error!!!");
});

console.log("promise001", promise001);
console.log("promise002", promise002);

const timer002 = setTimeout(() => {
  console.log("promise001", promise001);
  console.log("promise002", promise002);
}, 2000);
// 1. promise001 đang pending state
// 2. tiếp tục execute promise002, bởi vị promise001 đang pending state
// 3. 2 console.log tiếp theo sẽ show ra kết quả pending
// 4. execute timer002 sau 2s sẽ create và gọi timer 1, sau 1s timer1 hoàn thành -> console ra success
// 5. sau 1s, timer002 hoàn thành -> error

/** Ví dụ về setTimeout() 05 */
// block-level declarations (using let, const, and in catch clauses) - khai báo cấp khối
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i)); // 0, 1, 2, 3
}

// function-level declarations (using var) - khai báo cấp hàm
for (var i = 0; i < 4; i++) {
  /** Vì dùng var, nên đã vô tình khai báo 1 biến duy nhất i và đc chia sẽ cả 4 lệnh gọi setTimeout
   * Vào thời điểm setTimeout đầu tiên đc kích hoạt, vòng lặp đã chạy đc 4 lần rồi. Nên i lúc này = 4
   */

  setTimeout(() => console.log(i)); // 4, 4, 4, 4
}

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i));
}

/** Mặc dù callback queue áp dụng kiến trúc FIFO nhưng tùy thuộc vào thời gian set Timeout */
setTimeout(function a() {}, 1000);
setTimeout(function b() {}, 500);
setTimeout(function c() {}, 0);

function d() {}
d();
// task queue: -> a, b, c
// d -> c -> b -> a

async function getNumber() {
  return 10;
}

getNumber(); // Return promise , but not return 10

getNumber().then((n) => {
  console.log(n);
}); // Return 10

async function getNumber() {
  return Promise.resolve(10);
}
getNumber(10); // return 10
