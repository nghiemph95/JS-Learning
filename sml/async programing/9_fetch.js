/** fetch là 1 global method nằm trong Web APIs , hiểu nôm na là 1 cái hàm*/

const url = "https://js-post-api.herokuapp.com/api/students?_page=1";
const init = {
  method: "POST", // GET, PUT, PATCH. DELETE
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_TOKEN_HERE",
  },
  body: JSON.stringify({ name: "Easy Frontend" }),
};

const promise = fetch(url, init); // init là 1 cái object, là 1 optional và trả về 1 promise

/** fetch luôn luôn trả về promise vs status là fulfilled
 * fetch chỉ trả về error khi network không thực hiện được hoặc bị lỗi
 * cho dù server có trả ra mã lỗi hoặc các message lỗi thì fetch vẫn nhận vào là RESPONSE OK
 */

/** Fetch with headers/body */

// Add new student
fetch("https://js-post-api.herokuapp.com/api/students", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Easy Frontend",
    age: 18,
    mark: 9,
    gender: "male",
  }),
})
  .then()
  .catch();

// Update partial info of student
fetch(
  "https://js-post-api.herokuapp.com/api/students/e0df2354-1014-4f40-97c4-76e1dac88ab5",
  {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Easy",
      age: 20,
    }),
  }
)
  .then()
  .catch();

// Delete a student
fetch(
  "https://js-post-api.herokuapp.com/api/students/e0df2354-1014-4f40-97c4-76e1dac88ab5",
  {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }
)
  .then()
  .catch();

/** Handle errors */
fetch("https://js-post-api.herokuapp.com/api/invalid-endpoint", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (response.ok) return response.json();
    // TODO: How you handle errors here? --> It depends on what your API
    returns;
    // Solution 1: return Promise.reject(new Error('Something wrong!'));
    // Solution 2: throw new Error(response.statusText);
    return response.json().then((data) => {
      throw new Error(data?.message || "Something went wrong!");
    });
  })
  .catch((error) => {
    console.log(error);
    // Toast message
    // Send report to log server (Sentry)
  });
