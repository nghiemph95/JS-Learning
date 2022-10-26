import postApi from "./api/postApi";
import {
  initPagination,
  initSearch,
  renderPostList,
  renderPagination,
} from "./utils";

// lấy thông tin param
async function handleFilterChange(filterName, filterValue) {
  try {
    // update query param
    const url = new URL(window.location);
    url.searchParams.set(filterName, filterValue);

    // reset page khi searchh
    if (filterName === "title_like") url.searchParams.set("_page", 1);

    history.pushState({}, "", url);

    //set default query param
    const { data, pagination } = await postApi.getAll(url.searchParams);
    // lấy dữ liệu mới nhất render lại post list của mình
    renderPostList("postList", data);
    renderPagination("pagination", pagination);
  } catch (error) {
    console.log("failed to fetch post lists.", error);
  }
}

// MAIN
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
    initPagination({
      // truyền vào id cho thẻ ul
      elementId: "pagination",
      // truyền vào param ban đầu
      defaultParams: queryParams,
      // khi có thay đổi, hàm sẽ báo lên cho cha xử lý
      onChange: (page) => handleFilterChange("_page", page),
    });

    // hàm sự kiên search
    initSearch({
      // truyền vào id cho thẻ ul
      elementId: "searchInput",
      // truyền vào param ban đầu
      defaultParams: queryParams,
      // khi có thay đổi, hàm sẽ báo lên cho cha xử lý
      onChange: (value) => handleFilterChange("title_like", value),
    });

    //lấy dữ liệu từ param
    // const queryParams = new URLSearchParams(window.location.search);
    //set default query param
    const { data, pagination } = await postApi.getAll(queryParams);
    // khi error xảy ra ở catch của createPostElement() thì nó sẽ vô tình đẩy tới đây và nó hiểu là success
    renderPostList("postList", data);
    renderPagination("pagination", pagination);
  } catch (error) {
    console.log("get all failed", error);
  }
})();
