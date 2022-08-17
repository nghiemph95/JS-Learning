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
 *  Web APIs : Trong trường hợp call stack ko xử lý hoặc ko hiểu một số hàm trong call stack nó sẽ đẩy qua Web APIs. Ví dụ: xử lý DOM, AJAX, setTimeout, setInterval
 *  Khi Web APIs làm xong, sẽ có 1 số hàm cần thực thi thì sẽ đưa vô callback Queue
 *  Khi Call Stack empty (tức là xử lý xong các hàm trong script) thì evet loop sẽ đẩy hàm trong Callback queue lên Call Stack
 */

/** Bất cứ khi nào một hàm không đồng bộ được gọi, nó sẽ được gửi đến một API của trình duyệt  */
/** Promise queue (Microtask) có độ ưu tiên cao hơn Callback Queue(Macrotask) */
console.log("a");

setTimeout(() => console.log("b"), 0);

new Promise((resolve, reject) => {
  resolve();
}).then(() => {
  console.log("c");
});

console.log("d");
// a -> d -> c -> b
