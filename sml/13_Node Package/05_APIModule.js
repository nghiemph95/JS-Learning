/** Tại sao nên sử dụng API Module:
 * khi có nhu cầu apply intercept requets/response (xử lý request/response) thì cần đến API Module
 */

/** Cấu trúc:
 * WebApp(React, Vanilla, JS, Angular) -> API Module -> Server
 *
 * API Module:
 * - API files: (mỗi resource sẽ tương ứng với 1 file API: sản phẩm, thông tin, ...)
 *  + productAPI.js
 *  + categoryAPI.js
 *  + userAPI.js
 * - HTTP Client:
 *  + axios
 *  + fetch
 *  + XMLHttpRequest
 */
