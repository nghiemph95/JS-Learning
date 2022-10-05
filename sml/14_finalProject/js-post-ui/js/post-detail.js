import dayjs from "dayjs";
import postApi from "./api/postApi";
import {
  registerLightbox,
  setEditPageLink,
  setHeroImage,
  setTextContent,
} from "./utils";

function renderPostDetail(post) {
  if (!post) return;

  // render title
  setTextContent(document, "#postDetailTitle", post.title);
  // render description
  setTextContent(document, "#postDetailDescription", post.description);
  // render author
  setTextContent(document, "#postDetailAuthor", post.author);
  // render updateAt
  setTextContent(
    document,
    "#postDetailTimeSpan",
    dayjs(post.updatedAt).format(" - DD/MM/YYYY HH:mm")
  );
  // render hero image
  setHeroImage(document, "postHeroImage", post.imageUrl);
  // render edit page link
  setEditPageLink(document, "goToEditPageLink", post.id);
}

(async () => {
  registerLightbox();
  try {
    // lấy được ra post id từ URL
    const searchParams = new URLSearchParams(window.location.search);
    const postId = searchParams.get("id"); // id của bài post, từng thẻ li.div.post-item
    if (!postId) return;

    // fetch dữ liệu chi tiết từ API
    const postDetail = await postApi.getById(postId); // dữ liệu từ server về bài post-detail

    // render dữ liệu vừa fetch
    renderPostDetail(postDetail);
  } catch (error) {
    console.log("get by id have error", error);
  }
})();
