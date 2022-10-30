import postApi from "./api/postApi";
import { initPostForm, toast } from "./utils";

function removeUnusedFields(formValues) {
  const payload = { ...formValues };

  // nếu imageSource = 'picsum' -> remove image
  // nếu imageSource = 'upload' -> remove imageUrl
  if (payload.imageSource === "upload") {
    delete payload.imageUrl;
  }
  delete payload.image;

  // xóa imageSource
  delete payload.imageSource;

  // xóa id khi ở add mode
  if (!payload.id) delete payload.id;

  return payload;
}

function jsonToFormData(jsonObject) {
  const formData = new FormData();

  for (const key in jsonObject) {
    formData.set(key, jsonObject[key]);
  }

  return formData;
}

async function handlePostFormSubmit(formValues) {
  // call api
  try {
    const payload = removeUnusedFields(formValues);
    const formData = jsonToFormData(payload);

    // check if is add/edit mode
    // S1: dựa vào searchParam (check id)
    // S2: kiểm tra có id hay ko trong formValues

    // call API
    // let savePost = null;
    // if (formValues.id) {
    //   savePost = await postApi.update(formValues);
    // } else {
    //   savePost = await postApi.add(formValues);
    // }

    const savePost = formValues.id
      ? await postApi.updateFormData(formData)
      : await postApi.addFormData(formData);

    // show success message
    toast.success("Save post successfully!");

    // redirect to detail page
    setTimeout(() => {
      window.location.assign(`/post-detail.html?id=${savePost.id}`);
    }, 1500);
  } catch (error) {
    console.log("failed to save post", error);
    toast.error(`Error: ${error.message}`);
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
    console.log("failed to fetch post detailss:", error);
  }
})();
