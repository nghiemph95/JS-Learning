// create custom instance
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://js-post-api.herokuapp.com/api",
  headers: {
    //trường hợp sử dụng thông tin có body(POST, PUT, PATCH), phải chỉ định content type là gì
    "Content-Type": "application/json", // content type phải viết đúng để nó có thể đọc được payload tương ứng.
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // transform data for all response
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
