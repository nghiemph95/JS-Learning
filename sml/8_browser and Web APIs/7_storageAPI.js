/** Mỗi website(origin) sẽ có 1 local/session Storage riêng */

/** Site Storage có nhiều unit, mỗi unit có nhiều origin,
 * mỗi origin có một kho chứa dữ liệu riêng (local/sessionStorage , IndexedDB)
 * và origin chỉ có quyền truy cập cái storage data của nó thôi*/

/** Storage Interface (Session/Local Storage đều là 1 storage object) */
Storage.getItem(key); // Get value của 1 cái key nào đó
Storage.setItem(key, value); // Set value cho key
Storage.removeItem(key); // Remove item
Storage.clear(); // clear all items

/** Lưu ý: Sec/Local và cả cookie tất cả đơn giản là key và value nó là chỉ là string
 * tức là bạn muốn làm gì nó thì làm, kiểu dữ liệu nào cũng được, phải chuyển thành
 * string trước khi lưu xuống, còn khi lấy lên thì parse lại kiểu dữ liệu mình mong muốn
 *
 */
const student = { id: 1, name: "easy" };
localStorage.setItem("student", JSON.stringify(student)); // chuyển object về chuỗi
JSON.parse(localStorage.getItem("student")); // ch về lại object để lấy lên

/** Khác biệt localStorage và SessionStorage
 * Session : cho từng tab 1, khi bạn tạo 1 tab mới, nó sẽ tạo ra 1 sec, khi đóng thì nó sẽ tắt, nếu dub thì nó sẽ copy qua nhau
 * Local: cho nguyên cái origin, cả trình duyệt
 */
