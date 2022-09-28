// create instant
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://js-post-api.herokuapp/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
