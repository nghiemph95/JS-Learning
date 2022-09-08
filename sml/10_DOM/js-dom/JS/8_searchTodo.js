// để duyệt qua các li thì phải đi tìm nó
function getAllTodoElement() {
  return document.querySelectorAll('#todoList > li');
}

// duyệt qua mảng li xem có match vs searchTerm ko
function isMatch(liElement, searchTerm) {
  if (!liElement) return false;
  if (searchTerm === '') return true;

  const titleElement = liElement.querySelector('p.todo__title');
  if (!titleElement) return false;

  return titleElement.textContent.toLowerCase().includes(searchTerm.toLowerCase());
}

// hàm search
function searchTodo(searchTerm) {
  const todoElementList = getAllTodoElement();

  for (const todoElement of todoElementList) {
    console.log(todoElement);
    const needToShow = isMatch(todoElement, searchTerm);

    todoElement.hidden = !needToShow;
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
