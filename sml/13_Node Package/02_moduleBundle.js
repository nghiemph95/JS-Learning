/** Module:
 * Nếu các file JS import lần nhau thì nó là 1 module
 * Common modules types:
 * - CommonJS (require khi viết NodeJS)
 * - AMD
 * - UMD
 * - ESM: ECMAScript Modules (synctax export/import)
 * - Native ESM: Tức là viết import/export trên trình duyệt vẫn hiểu
 */

// Minify: Code sẽ biến thành 1 hàng, bỏ qua khoảng trắng...
// Uglify: Tên biến sẽ đc tối giản thành các (a,b,c...), làm giảm đi các bộ nhớ

/** Task Runner: Các chương trình giúp run các task một cách tự động
 * dựa trên một hoặc nhiều điều kiện nào đó hoặc giúp run thủ công
 */

/** Module Bundle: là Công cụ giúp gộp các JS modules thành 1 tệp duy nhất và
 * thường đc chạy trong trình duyệt
 *
 * Module bundle: Webpack, Rollup, Parcel....
 * - Webpack: công cụ sử dụng để quản lý các module JS, nó đóng gói tất cả các mã nguồn
 * của chương trình cũng như CSS, hình ảnh, font,... .Assets chính là tên để gọi những thứ
 * đóng gói này và chúng đc webpack đóng gói thành file hoặc 1 vài file.
 * 
 * - Concepts:
 * + Entry: đưa vào 1 file JS, trong file JS sẽ có import này kia -> build ra 1 dạng cây dạng dependency graph
 * + Output: biết dc các file entry đã phân tích đc r thì cần tạo các file hay folder ntn thì cần output
 * + Loader: Webpack chỉ hiểu JS và JSON File nên vs các file khác CSS,... thì nó cần loader để nó hiểu được
 * + Plugin: Sau khi loader để ra đc các bundle thì cần config theo dạo minify, uglify,...
 */

/** Nhược điểm Webpack:
 * sau khi sửa 1 cái j đó thì nó sẽ re-bundle lại 
 * nên nếu app lớn thì việc này sẽ tốn nhiều thời gian
 */

/**
 * Hiện nay với sự phát triển như vũ bão của Javascript đặc biệt
 * là các đoạn mã code được viết sẵn như ReactJS, AngularJS,... giúp giảm thiểu code và
 * các CSS giúp nâng cao trải nghiệm người dùng khiến cho bộ nhớ và
 * các module JS trong ứng dụng không thể kiểm soát và gây tình trạng phình website.
 * Lúc này, vấn đề xảy ra là sắp xếp các mã nguồn như thế nào để dễ quản lý và truy xuất dữ liệu.
 * Chính vì vậy, việc sử dụng Webpack nhằm giúp cải thiện tình trạng bừa bãi và
 * quá tải là một sự lựa chọn đúng đắn.
 * Ngoài ra, Webpack còn có thể thực hiện được nhiều hoạt động khác nhau như:
 * - Giúp đóng gói resources.
 * - Theo dõi những thay đổi và chạy lại các task.
 * - Có thể thực hiện biên dịch Babel chuyển sang ES5, cho phép người dùng sử dụng các 
 *tính năng JavaScript mới nhất mà không phải lo về hỗ trợ trình duyệt.
 * - Có thể dịch từ CoffeeScript sang JavaScript.
 * - Có thể chuyển đổi ảnh inline sang data URIs.
 * - Cho phép người dùng sử dụng require() cho các file CSS.
 * - Có thể chạy một web server dùng cho development.
 * - Có thể xử lý hot module replacement (thay vì mỗi lần thay đổi code thì nó sẽ làm full reload thì
 * bây giờ nó chỉ replay cái chỗ thay đổi để reload chứ ko reload toàn bộ).
 * - Có thể tách các file output thành nhiều file khác nhau để tránh tải file js lớn 
 * trong lần đầu tải trang.
 * - Có thực hiện tree shaking(có thể remove dead code, không còn sử dụng).
 */
