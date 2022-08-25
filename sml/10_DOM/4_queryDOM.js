/** Mục tiêu:
 * 1. Tìm 1 phần tử nào đó thỏa 1 điều kiện nào đó
 * 2. Tìm nhiều phần tử thỏa đk nào đó
 */

/** getElementById lưu ý chỉ tồn tại trên document chứ ko tồn tại trên element
 * bởi vì trong file HTML thì id là unique, nên trên toàn bộ document, nó ko
 * cần pk đưa xún từn phần tử mà chỉ cần tồn tại trên document
 */

/** ngoài ra có thể tìm kiếm bằng querySelector , có thể tồn tại ở document và element
 * và cách nó tìm kiếm nó sử dụng thuật toán DFS Pre-order để tìm ra phần tử đầu tiên
 * mark vs đk. Nếu tìm ko thấy trả về Null
 */
<h1 id="title">Test</h1>;

//getElementById
const title = document.getElementById("title");
if (title) {
  console.log(title.textContent);
}

//querySelector (Nhớ phải truyền 1 chuỗi CSS Selector để tìm kiếm)
const titleV1 = document.querySelector("#title");
if (titleV1) {
  console.log(title.textContent);
}
