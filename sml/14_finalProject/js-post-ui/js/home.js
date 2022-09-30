import postApi from "./api/postApi";
import { setImageContent, setTextContent, truncateText } from "./utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

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
  console.log(postList);

  if (!Array.isArray(postList) || postList.length === 0) return;

  const ulElement = document.getElementById("postList");
  if (!ulElement) return;

  postList.forEach((post) => {
    const liElement = createPostElement(post);
    ulElement.appendChild(liElement);
  });
}

// hàm handle nút prev click
function handlePrevClick(e) {
  e.preventDefault();
  console.log("prev click");
}
// hàm handle nút next click
function handleNextClick(e) {
  e.preventDefault();
  console.log("next click");
}

// khởi tạo sự kiện click cho prev/next
function initPagination() {
  // bind click event for prev/next link
  const ulPagination = document.getElementById("pagination");
  if (!ulPagination) return;

  // gắn click event cho nút prev
  const prevLink = ulPagination.firstElementChild?.firstElementChild;
  if (prevLink) prevLink.addEventListener("click", handlePrevClick);

  // gắn click event cho nut next
  const nextLink = ulPagination.lastElementChild?.lastElementChild;
  if (nextLink) nextLink.addEventListener("click", handleNextClick);
}

(async () => {
  try {
    initPagination();

    const queryParams = {
      _page: 1,
      _limit: 6,
    };
    const { data, pagination } = await postApi.getAll(queryParams);
    // khi error xảy ra ở catch của createPostElement() thì nó sẽ vô tình đẩy tới đây và nó hiểu là success
    renderPostList(data);
  } catch (error) {
    console.log("get all failed", error);
  }
})();
