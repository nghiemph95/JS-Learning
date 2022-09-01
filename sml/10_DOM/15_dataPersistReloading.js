/** Nhằm mục đích khi remove 1 phần tử nào đó
 * mình reload lại nó sẽ vẫn giữ nguyên trạng thái ban đầu
 */

/** thực tế:
 * 1.Issue: Data sẽ bị mất khi reload
 * 2.Solution: Sử dụng localStorage để lưu trữ giá trị
 */

/** flow
 * 1. Thay vì lấy danh sách cố định, mình thực hiện đọc từ localStorage
 * 2. Sau đó sẽ render lên
 * 3. Sau đó sẽ lưu xuống ds todo mới vào localStorage
 * 4. Cập nhật lại DOM -> lưu vào localStorage 
 */