import axiosClient from "./axiosClient";

// import: default import, named import
// export: default export, named export
// default: can use your name -> have one default export ONLY
// named export: use exactly name -> have multipile export

const postApi = {
  getAll(params) {
    // param có dạng object nên axios sẽ hỗ trợ chuyển trừ object thành chuỗi
    /** Cách thức chuyển từ object params -> chuỗi sử dụng cơ chế
     * paramSerializer bằng cách sử dụng stringify, truyền vào là 1 object params
     * stringify(params, {arrayFormat: 'brackets'})
     */
    const url = "/posts";
    return axiosClient.get(url, { params }); // key vs value the same
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

  addFormData(data) {
    const url = '/with-thumbnail/posts';
    return axiosClient.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" }, // có thể overwrite bất cứ thứ gì
    });
  },

  updateFormData(data) {
    const url = `/with-thumbnail/posts/${data.get(id)}`;
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
