// để duyệt qua các li thì phải đi tìm nó
function getAllTodoElement() {
  return document.querySelectorAll('#todoList > li');
}

// duyệt qua mảng li xem có match vs searchTerm ko
function isMatch(liElement, searchTerm) {}

// hàm search
function searchTodo(searchTerm) {
  const todoElementList = getAllTodoElement();

  for (const todoElement of todoElementList) {
    console.log(todoElement);
  }
  // nếu searchTerm ko có giá trị = empty thì show tất cả

  // nếu searchTerm != empty -> filter todo
}

function initSearchInput() {
  // find search term input
  const searchInput = document.getElementById('searchTerm');
  if (!searchInput) return;

  // gắn sự kiên cho searchInput
  searchInput.addEventListener('input', () => {
    console.log('input', searchInput.value);
    searchTodo(searchInput.value);
  });
}

//main
(() => {
  initSearchInput();
})();
