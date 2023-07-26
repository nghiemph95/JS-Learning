/** fetch là 1 global method nằm trong Web APIs , hiểu nôm na là 1 cái hàm*/

const url = "https://js-post-api.herokuapp.com/api/students?_page=1";
const init = {
  method: "POST", // GET, PUT, PATCH. DELETEEEE
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

/**API là chuẩn giao tiếp giữa 2 hệ thống với nhau.

HTTP API là chuẩn giao tiếp thông qua HTTP để 2 hệ thống có thể nói chuyện với nhau.

HTTPS giúp mình bảo mật gói tin trên đường truyền internet, trong khi HTTP thì sẽ được truyền đi dạng plain/text. 
Dễ bị tấn công middleman.

REST API là chuẩn giao tiếp client-server (cùng một số đặc điểm khác) giúp mình có được 
một số quy tắc nhất định trong việc quy định về resource, method để client và server có thể "nói chuyện" được với nhau.



Về nguyên tắc đơn giản,

- Client: gửi một HTTP Request lên server

- Server: sau khi nhận được request sẽ xử lý và trả về một HTTP Response */

/** Fetch with async : Extracting data */
(async function getResponse() {
  const response = await fetch("https://....", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  const data = await response.json();
})();

/** Retry fetch API  */
function fetchRetry(url, options = {}, retries = 3, backoff = 300) {
  /** 1 */
  const retryCodes = [408, 500, 502, 503, 504];
  return fetch(url, options)
    .then((res) => {
      if (res.ok) return res.json();

      if (retries > 0 && retryCodes.includes(res.status)) {
        setTimeout(() => {
          /** 2 */
          return fetchRetry(url, options, retries - 1, backoff * 2);
        }, backoff);
      } else {
        throw new Error(res);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

/** Một tùy chọn khác là sử dụng một công cụ quan sát và phản ứng với những điểm bất thường trong lệnh gọi API */

/** Áp dụng retry fetch vơi async/awaitt */
async function fetchRetry1(url, options = {}, retries = 3, backoff = 200) {
  const retryCodes = [408, 500, 502, 503, 504];

  return await fetch(url, options)
    .then((response) => {
      if (response.ok) return response.json();

      if (retries > 0 && retryCodes.includes(response.status)) {
        setTimeout(() => {
          return fetchRetry1(url, options, retries - 1, backoff * 2);
        }, backoff);
      } else {
        throw new Error(response);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

/** Áp dụng retry fetch vs async/await và try catching */
async function fetchRetry2(url, retries = 3, backoff = 200) {
  try {
    const retryCodes = [408, 500, 502, 503, 504, 506];

    const response = await fetch(url);
    if (response.ok) {
      const body = await response.json();
      console.log(body);

      if (retries > 3 && retryCodes.includes(response.status)) {
        setTimeout(() => {
          return fetchRetry2(url, retries - 1, backoff * 2);
        }, backoff);
      }
    } else {
      throw new Error(response);
    }
  } catch (error) {
    console.log(error);
  }
}

const data = [
  {
    key: "nghiem",
    label: "12312312",
    dataType: "dropdown",
    attributeValues: '["aaa","aaa"]',
    positionDisplayedInTenant: 1,
  },
  {
    key: "pham",
    label: "1312",
    dataType: "dropdown",
    attributeValues: '["aaa","aaca","aacad","fdfd"]',
    positionDisplayedInTenant: 2,
  },
];
function checkDuplicateAttributeValues(data) {
  const newAttribute = data.map((attr) => {
    if (attr.dataType === "dropdown") {
      attr.attributeValues = JSON.parse(attr.attributeValues);
    }
    return attr;
  });

  const seen = new Set();
  for (const attribute of newAttribute) {
    for (const value of attribute.attributeValues) {
      if (seen.has(value)) {
        return true;
      } else {
        seen.add(value);
      }
    }
  }
  return false;
}
console.log(checkDuplicateAttributeValues(data));

const dataa = [
  ["aaa", "aaca"],
  ["aaa", "aac", "sdsds", "fdfd"],
];
function checkDUp(dataa) {
  return dataa.some((subArray) => {
    const seen = new Set();
    for (let i = 0; i < subArray.length; i++) {
      const element = subArray[i];
      if (seen.has(element)) {
        return true; // Exit early if a duplicate is found
      } else {
        seen.add(element);
      }
    }
    return false;
  });
}

console.log(checkDUp(dataa));

useEffect(() => {
  const globalSelectedTenant = localStorage.getItem(
    `${lsConstants.GLOBAL_TENANT}`
  );
  if (globalSelectedTenant) {
    const jsonGlobalSelectedTenant = JSON.parse(globalSelectedTenant) ?? {};
    if (jsonGlobalSelectedTenant) {
      const _attributes = jsonGlobalSelectedTenant.attributes
        ? sortBy(
            jsonGlobalSelectedTenant.attributes,
            ["positionDisplayedInTenant"],
            ["ASC"]
          )
        : [];
      const jsonParseAttribute = _attributes.map((attr) => {
        if (
          attr.dataType === AttributeDataType.DROPDOWN &&
          !Array.isArray(attr.attributeValues)
        ) {
          attr.attributeValues = JSON.parse(attr.attributeValues);
        }
        return attr;
      });
      setAttributes(jsonParseAttribute || []);
    } else {
      setAttributes([]);
    }
  }
}, [store.global.globalSelectedTenant]);

const arr = ["aaa", "bbb"];
const newArr = [
  { label: "aaa", value: "aaa" },
  { label: "bbb", value: "bbb" },
];

const object = {
  attributes: {
    order: 0,
    placement: "",
    nghiem: { value: "bbb" },
    pham: { label: "ccc", value: "ddd" },
  },
  create: "abc",
  update: "xyz",
};

const newObject = {
  attributes: {
    order: 0,
    placement: "",
    nghiem: { value: "bbb" },
    pham: { value: "ddd" },
  },
  create: "abc",
  update: "xyz",
};

const a = [
  {
    attribute: '["aaaaa","bbb", "ccc"]',
    key: "abc",
    dataType: "dropdown",
  },
  {
    attribute: '["a","b","c"]',
    key: "xyz",
    dataType: "dropdown",
  },
  {
    attribute: "",
    key: "clm",
    dataType: "text",
  },
];
const dropdownAttributes = a
  .filter((obj) => obj.dataType === "dropdown")
  .map((obj) => obj.attribute);

console.log(dropdownAttributes);
const arrA = ['["aaaaa","bbb", "ccc"]', '["a","b","c"]'];
const arrB = ['["a","b"]', '["aaaaa","bbb"]'];
console.log(JSON.parse(arrA));

const output = arrA
  .map((item) => {
    if (!arrB.includes(item)) {
      return item;
    }
  })
  .filter(Boolean);

console.log(output);

const b = [
  {
    attribute: '["a","b"]',
    key: "xyz",
    dataType: "dropdown",
  },
  {
    attribute: '["aaaaa","bbb"]',
    key: "abc",
    dataType: "dropdown",
  },
  {
    attribute: "",
    key: "clm",
    dataType: "text",
  },
];

// const mmc = [
//   {
//     key: "abc",
//     attribute: '["ccc"]',
//   },
//   {
//     key: "xyz",
//     attribute: '["c"]',
//   },
// ];

const mmc = a.reduce((result, objA) => {
  if (objA.dataType === "dropdown") {
    const matchingObjB = b.find(
      (objB) => objB.key === objA.key && objB.dataType === "dropdown"
    );
    if (matchingObjB) {
      result.push({
        key: objA.key,
        attribute: matchingObjB.attribute,
      });
    }
  }
  return result;
}, []);

console.log(mmc);


