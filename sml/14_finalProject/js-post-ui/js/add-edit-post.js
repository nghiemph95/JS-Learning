import postApi from "./api/postApi";
import { initPostForm } from "./utils";

function handlePostFormSubmit(formValues) {
  console.log("submit from parent", formValues);

  // call api
  try {
    // check if is add/edit mode
    // call API
    // show success message
    // redirect to detail page
  } catch (error) {
    console.log("failed to save post", error);
  }
}

// MAINNN
(async () => {
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const postId = searchParams.get("id");

    const defaultValues = Boolean(postId)
      ? await postApi.getById(postId)
      : {
          title: "",
          description: "",
          author: "",
          imageUrl: "",
        };

    initPostForm({
      formId: "postForm",
      defaultValues,
      onSubmit: handlePostFormSubmit,
    });
  } catch (error) {
    console.log("failed to fetch post details:", error);
  }
})();
