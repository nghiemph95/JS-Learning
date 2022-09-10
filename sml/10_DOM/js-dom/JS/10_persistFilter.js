// để duyệt qua các li thì phải đi tìm nó
function getAllTodoElement() {
  return document.querySelectorAll('#todoList > li');
}

// duyệt qua mảng li xem có match vs searchTerm ko
function isMatch(liElement, searchTerm) {
  if (!liElement) return false;
  // nếu searchTerm ko có giá trị = empty thì show tất cả
  if (searchTerm === '') return true;

  // nếu searchTerm != empty -> filter todo
  const titleElement = liElement.querySelector('p.todo__title');
  if (!titleElement) return false;

  return titleElement.textContent.toLowerCase().includes(searchTerm.toLowerCase());
}

// hàm search
function searchTodo(searchTerm) {
  const todoElementList = getAllTodoElement();

  for (const todoElement of todoElementList) {
    const needToShow = isMatch(todoElement, searchTerm);

    todoElement.hidden = !needToShow;
  }
}

function initSearchInput() {
  // find search term input
  const searchInput = document.getElementById('searchTerm');
  if (!searchInput) return;

  // gắn sự kiên cho searchInput
  searchInput.addEventListener('input', () => {
    searchTodo(searchInput.value);
  });
}

function filterTodo(filterStatus) {
  const todoElementList = getAllTodoElement();

  for (const todoElement of todoElementList) {
    const needToShow = filterStatus === 'all' || filterStatus === todoElement.dataset.status;

    todoElement.hidden = !needToShow;
  }
}

function initFilterStatus() {
  // find select
  const filterStatusSelect = document.getElementById('filterStatus');
  if (!filterStatusSelect) return;

  // attach event change
  filterStatusSelect.addEventListener('change', () => {
    filterTodo(filterStatusSelect.value);
  });
}

//main
(() => {
  initSearchInput();
  initFilterStatus();
})();
