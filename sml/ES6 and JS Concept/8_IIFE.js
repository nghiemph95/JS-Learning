//sync tax - JS func sẽ đc chạy ngay lập tức sau khi được định nghĩa
(function () {})();
(() => {})();

// IIFE function
(() => {
  console.log("print result");
})();

//same with this
function main() {
  console.log("test");
}
main();
