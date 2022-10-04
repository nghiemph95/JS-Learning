export function renderPagination(pagination) {
  if (!pagination) return;

  // tính tổng số Page đc phân trang
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  // lưu Page và tổng số page vào ulPagination
  const ulPagination = getUlPagination();
  if (ulPagination) {
    ulPagination.dataset.page = _page;
    ulPagination.dataset.totalPages = totalPages;
  }

  // gắn điều kiện để disable/enable prev/next link
  _page <= 1
    ? ulPagination.firstElementChild?.classList.add("disabled")
    : ulPagination.firstElementChild?.classList.remove("disabled");

  _page >= totalPages
    ? ulPagination.lastElementChild?.classList.add("disabled")
    : ulPagination.lastElementChild?.classList.remove("disabled");
}

// hàm handle nút prev click
export function handlePrevClick(e) {
  e.preventDefault();

  const ulPagination = getUlPagination();
  if (!ulPagination) return;

  const currentPage = Number.parseInt(ulPagination.dataset.page) || 1;
  if (currentPage <= 1) return;

  handleFilterChange("_page", currentPage - 1);
}
// hàm handle nút next click
export function handleNextClick(e) {
  e.preventDefault();

  const ulPagination = getUlPagination();
  if (!ulPagination) return;

  const currentPage = Number.parseInt(ulPagination.dataset.page) || 1;
  const currentTotalPage = Number.parseInt(ulPagination.dataset.totalPages);
  if (currentPage >= currentTotalPage) return;

  handleFilterChange("_page", currentPage + 1);
}

// khởi tạo sự kiện click cho prev/next
export function initPagination({ elementId, defaultParams, onChange }) {
  // bind click event for prev/next link
  const ulPagination = document.getElementById(elementId);
  if (!ulPagination) return;

  // set current active page
  // TODO: use default params

  // gắn click event cho nút prev
  const prevLink = ulPagination.firstElementChild?.firstElementChild;
  if (prevLink)
    prevLink.addEventListener("click", (e) => {
      e.preventDefault();
      const currentPage = Number.parseInt(ulPagination.dataset.page) || 1;
      if (currentPage <= 1) return;

      onChange?.(currentPage - 1);
    });

  // gắn click event cho nut next
  const nextLink = ulPagination.lastElementChild?.lastElementChild;
  if (nextLink)
    nextLink.addEventListener("click", (e) => {
      e.preventDefault();

      const currentPage = Number.parseInt(ulPagination.dataset.page) || 1;
      const currentTotalPage = Number.parseInt(ulPagination.dataset.totalPages);
      if (currentPage >= currentTotalPage) return;

      onChange?.(currentPage + 1);
    });
}
