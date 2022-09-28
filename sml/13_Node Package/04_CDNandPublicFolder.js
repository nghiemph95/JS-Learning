/** CDN: Contains delivery network: Mạng lưới các server trên toàn cầu
 * Khi một user ở xa , họ sẽ truy cập vào CDN gần nhất
 * Nếu CDN ko có cache của trang web mà client truy cập, nó sẽ request đến origin server
 * Sau đó origin server trả response về CDN và CDN response về Client
 * Lưu ý: Khi dùng cache, phải đặt ra câu hỏi là khi nào phải xóa cache bởi vì
 * khi release version mới phải cần xóa cach cũ hay ko
 */

/** Trường hợp khi thay đổi file nhưng vãn giữ tên file
 * khi deploy lên server nội dung của file đã thay đổi so vs bản đang lưu trong CDN Cache
 * cho nên khi thay đổi các file như hình ảnh, assets,... và khi build lên nó sẽ thay đổi bằng
 * cách thêm hash code ví dụ (recipe.jpg -> recipe.22bkb32.jpg)
 * 
 * Lưu ý ko lưu cache trên index.html
 */
