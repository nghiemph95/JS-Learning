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

//Tạo 1 hàm nhận vào 2 giá trị
function sum(a, b) {
  console.log(a + b);
}
sum(5, 10);

//IIFE
((a, b) => {
  console.log(a + b);
})(5, 10);

