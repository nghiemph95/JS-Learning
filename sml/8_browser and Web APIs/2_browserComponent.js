/** browser engine */
// webkit - apple - Safari
// Blink - Google - Chrome
// Gecko - Mozilla - Firefox

/** browser components */
//1. User interface: Giao diện người dùng
//2. Browser engine: Cung cấp phương thức/hàm để user interface gọi đến
//3. Rendering Engine: Render nội dung HTML/CSS và các plugin
//4. Networking: Thực thi http request để lấy dữ liệu (HTTP, WebSocket, WebRTC(Streaming))
//5. JS Engine: ECMAScript Engine (V8, SpiderMonkey...)
//6. UI Backend: Giao diện mạc định của hệ điều hành
//7. Data Storage: Lưu trữ dữ liệu trên trình duyệt của mình

/** Rendering Engine */
// HTML -> HTML Parser -> DOM Tree
// CSS -> CSS Parse -> Style Rules
// (DOM Tree + Style Rules) -> Render Tree -> Paint & Layout -> Display
