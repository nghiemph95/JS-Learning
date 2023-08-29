/** Mã giả: Pseudo Code
 * Để đánh giá khả năng của thuật toán dựa vào 2 yếu tố
 * Time Complexity và Space Complexity
 */

import { availableParallelism } from "os";

console.log([1, 2, 3].includes(1));

const compareAssignedListChangedV1 = (newList, oldList) => {
  const elementsInOld = new Set(oldList);
  const allElementInOld = newList.every((element) =>
    elementsInOld.has(element)
  );
  return allElementInOld;
};

const compareAssignedListChangedv2 = (newList, oldList) => {
  const elementsInOld = new Set(oldList);
  const allElementsInOld = newList.every((element) =>
    elementsInOld.has(element)
  );
  const allElementsInNew = oldList.every((element) =>
    new Set(newList).has(element)
  );
  return (
    allElementsInOld && allElementsInNew && newList.length === oldList.length
  );
};

const compareAssignedListChangedv3 = (newList, oldList) => {
  const elementsInOld = new Set(oldList);
  const elementsInNew = new Set(newList);
  if (
    elementsInOld.size !== elementsInNew.size ||
    newList.length !== oldList.length
  ) {
    return false;
  }
  for (const element of elementsInNew) {
    if (!elementsInOld.has(element)) {
      return false;
    }
  }
  return true;
};

const compareAssignedListChanged = (newList, oldList) => {
  if (!newList && !oldList) return true;

  if (newList && oldList) {
    if (newList.length !== oldList.length) {
      return false;
    }

    return newList.every((newId) => oldList.includes(newId));
  }

  return false;
};

console.log(compareAssignedListChanged([], [1, 2, 3]));

const aa = ["a", "b", "c"];
const bb = [
  { key: "a1", container: "xxx", value: "a" },
  { key: "a1", container: "yyy", value: "a" },
  { key: "a1", container: "mmm", value: "b" },
  { key: "a1", container: "ppp", value: "c" },
];

function findContainerAndValue(value, aa, bb) {
  return bb
    .filter((obj) => aa.includes(value) && obj.value === value)
    .map((obj) => ({ container: obj.container, value: obj.value }));
}

const matche = findContainerAndValue("a", aa, bb);
console.log(matche);

const a = [
  {
    name: "01",
    attributes: {
      a1: { label: "ddd", value: "ccc" },
      a2: "nghiem",
      a3: { label: "yyy", value: "yyy" },
    },
  },
  {
    name: "02",
    attributes: {
      a1: { label: "aaa", value: "aaa" },
      a2: "pham",
      a3: { label: "xyz", value: "xyz" },
    },
  },
  {
    name: "03",
    attributes: {
      a1: { label: "aaa", value: "aaa" },
      a2: "",
      a3: { label: "xyz", value: "xyz" },
    },
  },
];

const b = [
  {
    key: "a1",
    attribute: '["aaa","ddd","eee"]',
    dataType: "dropdown",
  },
  {
    key: "a2",
    attribute: "",
    dataType: "text",
  },
  {
    key: "a3",
    attribute: '["xyz","yyy","otp"]',
    dataType: "dropdown",
  },
];
console.log(b.map(({ id }) => id));

// function findValuesByKey(key, a, b) {
//   const matches = [];

//   const keyExists = b.some(element => element.key === key);
//   if (!keyExists) return matches;

//   for (let i = 0; i < a.length; i++) {
//     const obj = a[i];
//     if (obj.attributes[key]) {
//       const value = typeof obj.attributes[key] === 'object' ? obj.attributes[key].value : obj.attributes[key];
//       matches.push({ name: obj.name, key, value });
//     }
//   }

//   return matches;
// }

// const matches = findValuesByKey("a1", a, b);

// console.log(matches);

// function findValuesByKey(key, a, b) {
//   const values = [];

//   a.forEach((obj) => {
//     if (obj.attributes[key]) {
//       if (typeof obj.attributes[key] === "object") {
//         values.push(obj.attributes[key].value);
//       } else {
//         values.push(obj.attributes[key]);
//       }
//     }
//   });

//   return values;
// }

// const values = findValuesByKey("a2", a, b);

// console.log(values);

// const testing = (b, a) => {
//   return b.reduce((acc, element) => {
//     if (element.dataType === "dropdown") {
//       const attributeArray = JSON.parse(element.attribute);
//       const mismatchedItems = a.filter(
//         (item) =>
//           item.attributes[element.key]?.value &&
//           !attributeArray.includes(item.attributes[element.key].value)
//       );
//       acc.push(
//         ...mismatchedItems.map((item) => ({
//           name: item.name,
//           value: item.attributes[element.key].value,
//         }))
//       );
//     }
//     return acc;
//   }, []);
// };

// console.log(testing(b, a));

// if (mismatchedValues.length > 0) {
//   console.log(mismatchedValues);
// }

// const b = [
//   {
//     key: "a1",
//     attribute: '["aaa","ddd","eee"]',
//     dataType: "dropdown",
//   },
//   {
//     key: "a2",
//     attribute: "",
//     dataType: "text",
//   },
//   {
//     key: "a3",
//     attribute: '["xyz","yyy","otp"]',
//     dataType: "dropdown",
//   },
// ];

const b1 = [
  {
    key: "a1",
    attribute: '["aaa","ddd","eee"]',
    dataType: "dropdown",
  },
  {
    key: "a2",
    attribute: "",
    dataType: "text",
  },
  {
    key: "a3",
    attribute: '["xyz","yyy","otp"]',
    dataType: "dropdown",
  },
];

const getDifferentDataTypeElements = (b, b1) => {
  // return b.reduce((result, element, index) => {
  //   if (element.dataType !== b1[index].dataType) {
  //     result.push(element);
  //   }
  //   return result;
  // }, []);
  // return b.filter((element, index) => element.dataType !== b1[index].dataType);
  return b.filter((element) => {
    const matchingElement = b1.find((e) => e.key === element.key);
    return matchingElement && element.dataType !== matchingElement.dataType;
  });
};

console.log(getDifferentDataTypeElements(b, b1));

//  const getMatches = (a, b, b1) => {
//    const differentDataTypeElements = getDifferentDataTypeElements(b, b1);
//    const differentDataTypeKeys = differentDataTypeElements.map(
//      (element) => element.key
//    );

//    const matches = [];

//    a.forEach((obj) => {
//      differentDataTypeKeys.forEach((key) => {
//        if (obj.attributes[key]) {
//          if (typeof obj.attributes[key] === "object") {
//            matches.push({ name: obj.name, value: obj.attributes[key].value });
//          } else {
//            matches.push({ name: obj.name, value: obj.attributes[key] });
//          }
//        }
//      });
//    });

//    return matches;
//  };

//  const matches = getMatches(a, b, b1);

// console.log(matches);

const a = [
  {
    name: "01",
    attributes: {
      a1: { label: "ddd", value: "ddd" },
      a2: "nghiem",
      a3: { label: "yyy", value: "yyy" },
    },
  },
  {
    name: "02",
    attributes: {
      a1: { label: "aaa", value: "aaa" },
      a2: "pham",
      a3: { label: "xyz", value: "xyz" },
    },
  },
  {
    name: "03",
    attributes: {
      a1: { label: "aaa", value: "aaa" },
      a2: "",
      a3: { label: "xyz", value: "xyz" },
    },
  },
];

const b = [
  {
    key: "a1",
    attribute: '["aaa","ddd","eee"]',
    dataType: "dropdown",
  },
  // {
  //   key: "a2",
  //   attribute: "",
  //   dataType: "text",
  // },
  {
    key: "a3",
    attribute: '["xyz","yyy","otp"]',
    dataType: "dropdown",
  },
];

const testing = (b, a) => {
  const missingAttributes = [];

  for (const key of Object.keys(a[0].attributes)) {
    if (!b.some((item) => item.key === key)) {
      for (const item of a) {
        if (item.attributes[key]) {
          missingAttributes.push({
            name: item.name,
            value: item.attributes[key].label
              ? item.attributes[key].value
              : item.attributes[key],
          });
        }
      }
    }
  }

  return missingAttributes;
};

console.log(testing(b, a));

// const mismatchedValues = [];

// for (const element of b) {
//   if (element.dataType === "dropdown") {
//     const attributeArray = JSON.parse(element.attribute);
//     for (const item of a) {
//       if (
//         item.attributes[element.key]?.value &&
//         !attributeArray.includes(item.attributes[element.key].value)
//       ) {
//         mismatchedValues.push({
//           name: item.name,
//           value: item.attributes[element.key].value,
//         });
//       }
//     }
//   }
// }

// if (mismatchedValues.length > 0) {
//   console.log(mismatchedValues);
// }

// const result = b.every((element) => {
//   if (element.dataType === "dropdown") {
//     const attributeArray = JSON.parse(element.attribute);
//     return a.every((item) => {
//       return (
//         item.attributes[element.key]?.value &&
//         attributeArray.includes(item.attributes[element.key].value)
//       );
//     });
//   }
//   return true; // Skip non-dropdown elements
// });

console.log(result);

// const result = b.every((element) => {
//   if (
//     element.dataType === "dropdown" &&
//     a[element.key]?.value &&
//     element.attribute
//   ) {
//     const attributeArray = JSON.parse(element.attribute);
//     return attributeArray.includes(a[element.key].value);
//   }
//   return true; // Skip non-dropdown elements
// });

// const result = b.every((element) => {
//   if (a[element.key]) {
//     if (a[element.key].value && element.attribute) {
//       const attributeArray = JSON.parse(element.attribute);
//       return attributeArray.includes(a[element.key].value);
//     }
//   }
//   return false;
// });

console.log(result);

// const result = b.map((element) => {
//   if (a[element.key]) {
//     if (a[element.key].value && element.attribute) {
//       const attributeArray = JSON.parse(element.attribute);
//       return attributeArray.includes(a[element.key].value);
//     }
//   }
//   return false;
// });

// let result = false;

// b.forEach((element) => {
//   if (element.key === "a1" && a[element.key]) {
//     const attributeArray = JSON.parse(element.attribute);
//     if (attributeArray.includes(a[element.key].value)) {
//       result = true;
//     }
//   }
// });

// console.log(result);

b.forEach((element) => {
  if (a[element.key]) {
    if (a[element.key].value && element.attribute) {
      const attributeArray = JSON.parse(element.attribute);
      if (attributeArray.includes(a[element.key].value)) {
        console.log(`Value for key ${element.key} is included in attribute.`);
      } else {
        console.log(
          `Value for key ${element.key} is not included in attribute.`
        );
      }
    } else {
      console.log(
        `Value for key ${element.key} is not defined or attribute is empty.`
      );
    }
  } else {
    console.log(`Key ${element.key} does not exist in 'a'.`);
  }
});

const arr = [];

if (arr.length > 0) {
  console.log(true);
} else {
  console.log(false);
}
