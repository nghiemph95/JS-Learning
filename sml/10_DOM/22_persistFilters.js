/** Search được và filter được nhưng chưa kết hợp được
 * 1. Khi có filter change
 * 2. Update query param sử dụng history.pushState (không reload lại trình duyệt mà chỉ cập nhật lại queryParam)
 * 3. Sử dụng param để check li
 *
 */

/** compile search và fitler */

// function check Match Status
function isMatchStatus(liElement, filterStatus) {
  return filterStatus === "all" || filterStatus === liElement.dataset.status;
}

// function check Match Search
function isMatchSearch(liElement, searchTerm) {
  // searchInput = empty
  if (!searchTerm) return true;

  // searchInput != empty
  const titleTextInput = liElement.querySelector("p.todo__title");
  if (!titleTextInput) return false;

  return titleTextInput.textContent
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
}

// function check Match
function isMatch(liElement, params) {
  return (
    //url.searchParams.get('status') = pending/completed
    //url.searchParams.get('searchTerm') = textContent
    isMatchSearch(liElement, params.get("searchTerm")) &&
    isMatchStatus(liElement, params.get("status"))
  );
}

// function handleChanging gồm changeName và changeValue
function handleChanging(changeName, changeValue) {
  // trước khi handleChange, cần truyền thông tin lên param
  const url = new URL(window.location);
  url.searchParams.set(changeName, changeValue);
  history.pushState({}, "", url);

  // lấy ra tất cả thẻ li
  const liElementList = document.querySelectorAll("#todoList > li");
  if (liElementList) {
    for (const liElement of liElementList) {
      const isShowing = isMatch(liElement, url.searchParams);

      liElement.hidden = !isShowing;
    }
  }
}

function initFilterStatus() {
  // find combo box
  const filterStatusSelect = document.getElementById("filterStatus");
  if (!filterStatusSelect) return;

  // add event filter
  filterStatusSelect.addEventListener("change", () => {
    // add function handleChanging
    handleChanging("status", filterStatusSelect.value);
  });
}

function initSearchInput() {
  // find search input
  const searchInput = document.getElementById("searchTerm");
  if (!searchInput) return;

  // add event search
  searchInput.addEventListener("input", () => {
    // add function handleChanging
    handleChanging("searchTerm", searchInput.value);
  });
}

//main
(() => {
  initSearchInput();
  initFilterStatus();
})();
