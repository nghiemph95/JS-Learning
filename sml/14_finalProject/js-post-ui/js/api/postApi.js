import axiosClient from "./axiosClient";

const postApi = {
  getAll(params) {
    // param có dạng object nên axios sẽ hỗ trợ chuyển trừ object thành chuỗi
    /** Cách thức chuyển từ object params -> chuỗi sử dụng cơ chế
     * paramSerializer bằng cách sử dụng stringify, truyền vào là 1 object params
     * stringify(params, {arrayFormat: 'brackets'})
     */
    const url = "/posts";
    return axiosClient.get(url, { params, baseURL: "https://abc.com" }); // key vs value the same
  },

  getById(id) {
    const url = `/posts/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = "/posts";
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/posts/${data.id}`;
    return axiosClient.patch(url, data);
  },

  updateFormData(data) {
    const url = `/posts/${data.id}`;
    return axiosClient.patch(url, data, {
      headers: { "Content-Type": "multipart/form-data" }, // có thể overwrite bất cứ thứ gì
    });
  },

  remove() {
    const url = `/posts/${id}`;
    return axiosClient.delete(url);
  },
};

export default postApi;
