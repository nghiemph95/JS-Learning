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
  // render hero imageeee
  setHeroImage(document, "postHeroImage", post.imageUrl);
  // render edit page link
  setEditPageLink(document, "goToEditPageLink", post.id);
}

(async () => {
  registerLightbox({
    modalId: "lightbox",
    imgSelector: 'img[data-id="lightboxImg"]',
    prevSelector: 'button[data-id="lightboxPrev"]',
    nextSelector: 'button[data-id="lightboxNext"]',
  });
  try {
    // lấy được ra post id từ URLL
    const searchParams = new URLSearchParams(window.location.search);
    const postId = searchParams.get("id"); // id của bài post, từng thẻ li.div.post-item
    if (!postId) return;

    // fetch dữ liệu chi tiết từ APIII
    const postDetail = await postApi.getById(postId); // dữ liệu từ server về bài post-detail

    // render dữ liệu vừa fetch
    renderPostDetail(postDetail);
  } catch (error) {
    console.log("get by id have error", error);
  }
})();
