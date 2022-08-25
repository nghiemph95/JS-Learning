/** Mục tiêu:
 * 1. Tìm 1 phần tử nào đó thỏa 1 điều kiện nào đó
 * 2. Tìm nhiều phần tử thỏa đk nào đó
 */

/** Find an element */
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

/** cố gắng Narrow Down (thu hẹp phạm vi) tìm kiếm khi muốn lấy phần tử */
<div id="product-123" class="product">
  <p class="product__name">Javascript cho người mới bắt đầu 🎉 </p>
  <p class="product__price">39.99$</p>
</div>;

// DON'T
const productName = document.querySelector("#product-123 > .product__name");
const productPrice = document.querySelector("#product-123 > .product__price");
// as it need to search on the whole tree over and over again for each query

// DO: arrow down the query scope
// 1. Get the product first
// 2. From the product element, search the element inside it's subtree only
const product = document.getElementById("product-123");
if (product) {
  const productName = product.querySelector(".product__name");
  const productPrice = product.querySelector(".product__name");
}

/** Find all elements */
/** Sử dụng querySelectorAll - search by: CSS Selector
 * Chú ý: querySelectorAll có Live là NO tức là khi cập nhật trên DOM nó sẽ ko thay đổi
 * giá trị đã query
 */

<ul id="todoList">
  <li>Learn Javascript</li>
  <li>Learn ReactJS</li>
  <li>Learn NextJS</li>
</ul>;

// 1. Narrow down the scope of querying
const todoListElement = document.getElementById("todoList");
// 2. Make sure to check if existed before using
if (todoListElement) {
  // 3. Get list of li elements
  const todoElementList = todoListElement.querySelectorAll("li");
  // 4. Loop through it and log the content
  for (const todoElement of todoElementList) {
    console.log(todoElement.textContent);
    // Learn Javascript
    // Learn ReactJS
    // Learn NextJS
  }
}

//Sử dụng nhìu CSS Selector
<div id="todoList">
  <ul class="todo-list" data-weekday="monday">
    <li>Learn Javascript</li>
    <li>Learn ReactJS</li>
    <li>Learn NextJS</li>
  </ul>
  <ul class="todo-list tuesday" data-weekday="tuesday">
    <li>Learn Javascript</li>
    <li>Learn ReactJS</li>
    <li>Learn NextJS</li>
  </ul>
</div>;

// 1. Narrow down the scope of querying
const todoListElementv1 = document.getElementById("todoList");
// 2. Make sure to check if existed before using
if (todoListElementv1) {
  // 3. Some ways of query all li
  todoListElementv1.querySelectorAll("li");
  todoListElementv1.querySelectorAll("ul > li");
  todoListElementv1.querySelectorAll("ul.todo-list > li");
  todoListElementv1.querySelectorAll(
    'ul[data-weekday="monday"] > li, ul[data-weekday="tuesday"] > li'
  );
}
