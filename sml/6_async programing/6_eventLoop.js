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
/** Promise queue (Microtask) có độ ưu tiên cao hơn Callback Queue(Macrotask) */
console.log("a");

setTimeout(() => console.log("b"), 0);

new Promise((resolve, reject) => {
  console.log("f")
  resolve();
}).then(() => {
  console.log("c");
});

console.log("d");
// a -> f -> d -> c -> b

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

getNumber().then((n) => {console.log(n)}) // Return 10

async function getNumber(){
  return Promise.resolve(10)
}
getNumber(10) // return 10