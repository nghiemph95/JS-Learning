import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { setImageContent, setTextContent, truncateText } from "./common";

// use from now function
dayjs.extend(relativeTime);

export function createPostElement(post) {
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

  // gắn sự kiện cho từng thẻ div của post (div.post-item  )
  const divElement = liElement.firstElementChild;
  if (divElement)
    divElement.addEventListener("click", () => {
      window.location.assign(`/post-detail.html?id=${post.id}`);
    });

  // gắn sự kiện click vô nút edit trong mỗi bài post
  const editButton = liElement.querySelector('[data-id="edit"]');
  if (editButton)
    editButton.addEventListener("click", () => {
      console.log("click");
    });

  return liElement;
}

export function renderPostList(elementId, postList) {
  if (!Array.isArray(postList)) return;

  const ulElement = document.getElementById(elementId); //elementId = 'postList'
  if (!ulElement) return;

  // xóa post list hiện tại khi chuyển pagination
  ulElement.textContent = "";

  postList.forEach((post) => {
    const liElement = createPostElement(post);
    ulElement.appendChild(liElement);
  });
}
