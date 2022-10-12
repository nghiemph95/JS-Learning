// MAIN
(async () => {
  const searchParams = new URLSearchParams(window.location.search);
  const postId = searchParams.get("id");

  console.log("add edit page", postId);
})();
