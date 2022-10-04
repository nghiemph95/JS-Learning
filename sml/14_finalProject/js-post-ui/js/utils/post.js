import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { setImageContent, setTextContent, truncateText } from "./common";

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
