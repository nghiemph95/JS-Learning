import postApi from "./api/postApi";

// id="goToEditPageLink
// id="postHeroImage
// id="postDetailTitle
// id="postDetailAuthor
// id="postDetailTimeSpan
// id="postDetailDescription

function renderPostDetail(post) {
  // render title
  // render description
  // render author
  // render updateAt
  // render hero image
  // render edit page link
}

(async () => {
  try {
    // lấy được ra post id từ URL
    const searchParams = new URLSearchParams(window.location.search);
    const postId = searchParams.get("id"); // id của bài post, từng thẻ li.div.post-item
    if (!postId) return;

    // fetch dữ liệu chi tiết từ API
    const post = await postApi.getById(postId); // dữ liệu từ server về bài post-detail

    // render dữ liệu vừa fetch
    renderPostDetail(post);
  } catch (error) {
    console.log("get by id have error", error);
  }
})();
