import postApi from "./api/postApi";

async function main() {
  //   const response = await axiosClient.get("/posts");

  try {
    const queryParams = {
      _page: 1,
      _limit: 5,
    };
    const response = await postApi.getAll(queryParams);
    console.log(response);
  } catch (error) {}

  await postApi.updateFormData({
    id: "lea2aa9l7x3a5tg",
    title: "Iure aperiam unde 111",
  });
}

main();
