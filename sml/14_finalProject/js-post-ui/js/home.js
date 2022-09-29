import postApi from "./api/postApi";

function createPostElement(post) {
  if (!post) return;

  // find and clone template
  const postTemplate = document.getElementById("postTemplate");
  if (!postTemplate) return;

  const liElement = postTemplate.content.firstElementChild.cloneNode(true);
  // update template (title, description, author, thumbnail)

  // attach event
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
