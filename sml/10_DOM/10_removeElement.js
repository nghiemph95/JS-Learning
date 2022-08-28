/** Mục đích:
 * 1. Xóa chính nó
 * 2. Xóa tất cả cá thằng con (all chilren)
 */

/** Sử dụng hàm remove() để remove chính nó */
const messsage = document.getElementById("test");
// sau 1s sẽ remove message
if (messsage) {
  setTimeout(() => {
    messsage.remove();
  }, 1000);
}

/** Có 3 cách để remove all
 * 1. Sử dụng target.innerHTML = ''
 * 2. Sử dụng target.textContent = '' (MDN khuyên dùng vì nhanh, recommend)
 * 3. Sử dụng lastElementChild ( thằng con cuối cùng)
 */
const ulElement = document.getElementById("todoList");
if (ulElement) {
  while (ulElement.lastElementChild) {
    ulElement.removeChild(ulElement.lastElementChild);
  }
}

/** Người ta thường sử dụng VirtualDOM nhằm tạo 1 cây trung gian trên bộ nhớ
 * nhằm giảm tải cho DOM chính (thao tác sử lý trên DOM rất tốn kém)
 * sau đó nó sẽ gom lại các hành động, sau đó nó sẽ thực hiện những
 * thuật toán nhằm lấy kết quả cuối cùng
 *
 */
