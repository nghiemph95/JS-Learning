/** AJAX được tạo thành từ nhiều công nghệ khác nhau, bao gồm HTML/CSS, DOM
 * và XMLHttpRequest: gửi dữ liệu lên server và đợi server trả về
 * XML,HTML, XSLT
 * Túm lại: Chuẩn gồm tập hợp nhìu công nghệ vs nhau từ request đến response
 */

/** HTTP APIs : Chuẩn giao tiếp giữa 2 hệ thống với nhau . Ví dụ: REST API, QraphQL API... */

/** Không phải tất cả HTTP APIs là REST APIs
 * Cần thỏa mãn các yếu tố sau:
 * - Có mô hình client-server: Túc là 1 bên là cung cấp apis, 1 bên là sử dụng apis,
 * - stateless server: ko có lưu trữ state, tức là khi gửi request lên server thì server đã có đầy đủ thông tin để xử lý, nó ko quan tâm bạn là ai hay từ đâu đến, ko cần lưu trữ state.
 * - cachable: định nghĩa 1 số apis có cho cache lại hay ko
 * - uniform interface: bộ quy chuẩn cách đặt 1 số bộ api, ví dụ: /student tức là lấy toàn bộ ds student
 */

/** Bây giờ người ta ko còn sử dụng XMLHttpRequest để gọi các API nữa
 * thay vào đó sử dụng fetch(), và ngoài ra còn thư viện hỗ trợ tốt hơn nữa là Axios
 */

/** Túm lại giữa client và server cần 1 cái chuẩn để 2 hệ thống giao tiếp vs nhau ở giữa gọi là API */
