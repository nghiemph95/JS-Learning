import postApi from "./api/postApi";
import { initPostForm } from "./utils";

// function handlePostFormSubmit(formValues) {
//   console.log("submit from parent", formValues);

//   // call api
// }

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
      onSubmit: (formValues) => {
        console.log("submit from parent", formValues);
      },
    });
  } catch (error) {
    console.log("failed to fetch post details:", error);
  }
})();
