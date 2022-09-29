import postApi from "./api/postApi";

async function main() {
  try {
    const queryParams = {
      _page: 1,
      _limit: 5,
    };
    const response = await postApi.getAll(queryParams);
    console.log(response);
  } catch (error) {
    console.log("get all failed", error);
  }

  await postApi.updateFormData({
    id: "lea2aa9l7x3a5tg",
    title: "Iure aperiam unde",
  });
}

main();
