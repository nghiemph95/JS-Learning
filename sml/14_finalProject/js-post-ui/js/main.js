import axiosClient from "./api/axiosClient";

console.log("Hello !");

async function main() {
  const response = await axiosClient.get("/posts");
  console.log(response);
}

main();
