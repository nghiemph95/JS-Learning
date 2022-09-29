import postApi from "./api/postApi";

function renderPostList(postList) {
  console.log(postList);
}

(async () => {
  try {
    const queryParams = {
      _page: 1,
      _limit: 6,
    };
    const { data, pagination } = await postApi.getAll(queryParams);
    renderPostList(data);
  } catch (error) {
    console.log("get all failed", error);
  }
})();
