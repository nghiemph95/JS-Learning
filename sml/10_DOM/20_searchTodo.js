/** Search todo
 * 1. Gõ input
 * 2. Duyệt qua list li
 * 3. Lấy nội dụng Li ra so sánh có mark hay ko
 * 4. Lấy ra nội dung cần tìm
 */

/** Lưu ý khi sử dụng sự kiện change
 * cần lưu ý loại input là gì, type và text
 * nó chỉ trigger khi và chỉ khi
 * 1. giá trị có thay đổi và bạn có blur ra ngoài (click ra ngoài)
 * 2. thay đổi giá trị và nhấn enter
 */

// duyệt qua từng liElement, check có map với searchTerm ko ?
function isMatch(liElement, searchTerm) {
  // searchTerm = null
  if (searchTerm === "") return true;
  // searchTerm !== null
  const contentElement = liElement.querySelector("p.todo__title");
  if (!contentElement) return false;

  return contentElement.textContent
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
}

// search function
function searchTodo(searchTerm) {
  // loop qua tất cả liElement
  const todoElelmentList = document.querySelectorAll("#todoList > li");

  for (const todoElement of todoElelmentList) {
    // check mỗi element có map với searchTerm hay ko
    const isShow = isMatch(todoElement, searchTerm);

    todoElement.hidden = !isShow; // false = show
  }
}

// input searchTerm
function initSearchInput() {
  // find search input form
  const searchInput = document.getElementById("searchTerm");
  if (!searchInput) return;

  // gắn sự kiện search
  searchInput.addEventListener("input", () => {
    searchTodo(searchInput.value);
  });
}

// main
(() => {
  initSearchInput();
})();
