import postApi from "./api/postApi";
import {
  initPagination,
  initSearch,
  renderPostList,
  renderPagination,
  toast,
} from "./utils";

// lấy thông tin param
async function handleFilterChange(filterName, filterValue) {
  try {
    // update query param
    const url = new URL(window.location);
    if (filterName) url.searchParams.set(filterName, filterValue); // Chỉ khi truyền filterName thì mới trigger set vì lỡ khi muốn refresh thì ko cần truyền filterName

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

function registerPostDeleteEvent() {
  document.addEventListener("post-delete", async (event) => {
    try {
      const post = event.detail;
      if (window.confirm(`Are you sure remove post "${post.title}"`)) {
        await postApi.remove(post.id);
        await handleFilterChange();

        toast.success("Remove post successfully");
      }
    } catch (error) {
      console.log("failed to remove post", error);
      toast.error(error.message);
    }
    console.log("remove post click", event.detail);

    // call api to remove post by id
    // refresh data
  });
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

    // delete post
    registerPostDeleteEvent();

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

    // lấy dữ liệu từ param
    // const queryParams = new URLSearchParams(window.location.search);
    // set default query param
    // const { data, pagination } = await postApi.getAll(queryParams);
    // khi error xảy ra ở catch của createPostElement() thì nó sẽ vô tình đẩy tới đây và nó hiểu là success
    // renderPostList("postList", data);
    // renderPagination("pagination", pagination);
    handleFilterChange();
  } catch (error) {
    console.log("get all failed", error);
  }
})();
