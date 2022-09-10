// để duyệt qua các li thì phải đi tìm nó
function getAllTodoElement() {
  return document.querySelectorAll('#todoList > li');
}

function isMatchStatus(liElement, filterStatus) {
  return filterStatus === 'all' || filterStatus === liElement.dataset.status;
}

function isMatchSearch(liElement, searchTerm) {
  if (!liElement) return false;
  // nếu searchTerm ko có giá trị = empty thì show tất cả
  if (searchTerm === '') return true;

  // nếu searchTerm != empty -> filter todo
  const titleElement = liElement.querySelector('p.todo__title');
  if (!titleElement) return false;

  return titleElement.textContent.toLowerCase().includes(searchTerm.toLowerCase());
}

function isMatch(liElement, params) {
  return (
    isMatchSearch(liElement, params.get('searchTerm')) &&
    isMatchStatus(liElement, params.get('status'))
  );
}

// hàm search
// function searchTodo(searchTerm) {
//   const todoElementList = getAllTodoElement();

//   for (const todoElement of todoElementList) {
//     const needToShow = isMatch(todoElement, searchTerm);

//     todoElement.hidden = !needToShow;
//   }
// }

function initSearchInput() {
  // find search term input
  const searchInput = document.getElementById('searchTerm');
  if (!searchInput) return;

  // gắn sự kiên cho searchInput
  searchInput.addEventListener('input', () => {
    // searchTodo(searchInput.value);
    handleFilterChange('searchTerm', searchInput.value);
  });
}

function handleFilterChange(filterName, filterValue) {
  //update query params
  const url = new URL(window.location);
  url.searchParams.set(filterName, filterValue);
  history.pushState({}, '', url);

  const todoElementList = getAllTodoElement();
  for (const todoElement of todoElementList) {
    const needToShow = isMatch(todoElement, url.searchParams);

    todoElement.hidden = !needToShow;
  }
}

// function filterTodo(filterStatus) {
//   const todoElementList = getAllTodoElement();

//   for (const todoElement of todoElementList) {
//     const needToShow = filterStatus === 'all' || filterStatus === todoElement.dataset.status;

//     todoElement.hidden = !needToShow;
//   }
// }

function initFilterStatus() {
  // find select
  const filterStatusSelect = document.getElementById('filterStatus');
  if (!filterStatusSelect) return;

  // attach event change
  filterStatusSelect.addEventListener('change', () => {
    // filterTodo(filterStatusSelect.value);
    handleFilterChange('status', filterStatusSelect.value);
  });
}

//main
(() => {
  initSearchInput();
  initFilterStatus();
})();
