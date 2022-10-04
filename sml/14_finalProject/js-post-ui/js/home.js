import postApi from "./api/postApi";
import {
  getUlPagination,
  setImageContent,
  setTextContent,
  truncateText,
} from "./utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import debounce from "lodash.debounce";

// use from now function
dayjs.extend(relativeTime);

function createPostElement(post) {
  if (!post) return;

  // find and clone template
  const postTemplate = document.getElementById("postTemplate");
  if (!postTemplate) return;

  const liElement = postTemplate.content.firstElementChild.cloneNode(true);
  if (!liElement) return;

  // update template (title, description, author, thumbnail)
  setTextContent(liElement, '[data-id="title"]', post.title);
  setTextContent(
    liElement,
    '[data-id="description"]',
    truncateText(post.description, 100)
  );
  setTextContent(liElement, '[data-id="author"]', post.author);
  setImageContent(liElement, '[data-id="thumbnail"]', post.imageUrl);
  setTextContent(
    liElement,
    '[data-id="timeSpan"]',
    dayjs(post.updateAt).fromNow()
  );
  // attach event

  return liElement;
}

function renderPostList(postList) {
  if (!Array.isArray(postList)) return;

  const ulElement = document.getElementById("postList");
  if (!ulElement) return;

  // xóa post list hiện tại khi chuyển pagination
  ulElement.textContent = "";

  postList.forEach((post) => {
    const liElement = createPostElement(post);
    ulElement.appendChild(liElement);
  });
}

function renderPagination(pagination) {
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

// lấy thông tin param
async function handleFilterChange(filterName, filterValue) {
  try {
    // update query param
    const url = new URL(window.location);
    url.searchParams.set(filterName, filterValue);

    // reset page khi search
    if (filterName === "title_like") url.searchParams.set("_page", 1);

    history.pushState({}, "", url);

    //set default query param
    const { data, pagination } = await postApi.getAll(url.searchParams);
    // lấy dữ liệu mới nhất render lại post list của mình
    renderPostList(data);
    renderPagination(pagination);
  } catch (error) {
    console.log("failed to fetch post lists.", error);
  }
}

// hàm handle nút prev click
function handlePrevClick(e) {
  e.preventDefault();

  const ulPagination = getUlPagination();
  if (!ulPagination) return;

  const currentPage = Number.parseInt(ulPagination.dataset.page) || 1;
  if (currentPage <= 1) return;

  handleFilterChange("_page", currentPage - 1);
}
// hàm handle nút next click
function handleNextClick(e) {
  e.preventDefault();

  const ulPagination = getUlPagination();
  if (!ulPagination) return;

  const currentPage = Number.parseInt(ulPagination.dataset.page) || 1;
  const currentTotalPage = Number.parseInt(ulPagination.dataset.totalPages);
  if (currentPage >= currentTotalPage) return;

  handleFilterChange("_page", currentPage + 1);
}

// khởi tạo sự kiện click cho prev/next
function initPagination() {
  // bind click event for prev/next link
  const ulPagination = getUlPagination();
  if (!ulPagination) return;

  // gắn click event cho nút prev
  const prevLink = ulPagination.firstElementChild?.firstElementChild;
  if (prevLink) prevLink.addEventListener("click", handlePrevClick);

  // gắn click event cho nut next
  const nextLink = ulPagination.lastElementChild?.lastElementChild;
  if (nextLink) nextLink.addEventListener("click", handleNextClick);
}


// hàm search
function initSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  // set default value from query params
  // title_like
  const queryParams = new URLSearchParams(window.location.search);
  if (queryParams.get("title_like")) {
    searchInput.value = queryParams.get("title_like");
  }

  const debounceSearch = debounce(
    (event) => handleFilterChange("title_like", event.target.value),
    500
  );
  searchInput.addEventListener("input", debounceSearch);
}

(async () => {
  try {
    const url = new URL(window.location);

    // update search param, mặc định param truyền vào _page, _limit
    if (!url.searchParams.get("_page")) url.searchParams.set("_page", 1);
    if (!url.searchParams.get("_limit")) url.searchParams.set("_limit", 6);

    //update lại url
    history.pushState({}, "", url);
    // mặc định default url (Trường hợp _page và _limit không có)
    const queryParams = url.searchParams;

    // găn sự kiện click cho prev/next
    initPagination(queryParams);

    // hàm sự kiên search
    initSearch(queryParams);

    //lấy dữ liệu từ param
    // const queryParams = new URLSearchParams(window.location.search);
    //set default query param
    const { data, pagination } = await postApi.getAll(queryParams);
    // khi error xảy ra ở catch của createPostElement() thì nó sẽ vô tình đẩy tới đây và nó hiểu là success
    renderPostList(data);
    renderPagination(pagination);
  } catch (error) {
    console.log("get all failed", error);
  }
})();
