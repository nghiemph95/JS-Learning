/** Mã giả: Pseudo Code
 * Để đánh giá khả năng của thuật toán dựa vào 2 yếu tố
 * Time Complexity và Space Complexity
 */

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

const a = [
  {
    attributes: {
      a1: { label: "ddd", value: "ddd" },
      a2: "xxx",
      a3: { label: "yyy", value: "yyy" },
    },
  },
  {
    attributes: {
      a1: { label: "aaa", value: "aaa" },
      a2: "xxx",
      a3: { label: "xyz", value: "xyz" },
    },
  },
  {
    attributes: {
      a1: { label: "aaa", value: "aaa" },
      a2: "xxx",
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

const result = b.every((element) => {
  if (element.dataType === "dropdown") {
    const attributeArray = JSON.parse(element.attribute);
    return a.every((item) => {
      return (
        item.attributes[element.key]?.value &&
        attributeArray.includes(item.attributes[element.key].value)
      );
    });
  }
  return true; // Skip non-dropdown elements
});

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
