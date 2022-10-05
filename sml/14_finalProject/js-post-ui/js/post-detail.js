import dayjs from "dayjs";
import postApi from "./api/postApi";
import { setImageContent, setTextContent } from "./utils";

// id="goToEditPageLink
// id="postHeroImage
// id="postDetailTitle
// id="postDetailAuthor
// id="postDetailTimeSpan
// id="postDetailDescription

// author: "Freddie Zieme";
// createdAt: 1662885819124;
// description: "dolor fuga animi dolore voluptatum aliquam qui doloremque quibusdam similique et officiis sit alias rerum et dolorem necessitatibus rerum quisquam iusto nostrum ut officiis inventore velit voluptates possimus laudantium rerum dolores aut sint velit nisi odio laborum ut tempora nisi hic omnis consequatur et atque voluptas possimus officia voluptatum animi";
// id: "lea2aa9l7x3a5tg";
// imageUrl: "https://picsum.photos/id/624/1368/400";
// title: "Iure aperiam unde";
// updatedAt: 1662885819124;

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
  setImageContent(document, "#postHeroImage", post.imageUrl);
  // render edit page link
}

(async () => {
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
