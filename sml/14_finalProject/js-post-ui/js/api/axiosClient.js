// create custom instant
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://js-post-api.herokuapp.com/api",
  headers: {
    //trường hợp sử dụng thông tin có body(POST, PUT, PATCH), phải chỉ định content type là gì
    "Content-Type": "application/json", // content type phải viết đúng để nó có thể đọc được payload tương ứng.  
  },
});

export default axiosClient;
