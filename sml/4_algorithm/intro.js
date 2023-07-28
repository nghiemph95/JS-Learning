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

const a = {
  position: 0,
  size: 0,
  rotaion: 0,
  scale: 0,
  order: 0,
  placementType: "",
  tel: "",
  a1: { label: "bbb", value: "bbb" },
  a2: "xxx",
  a3: { label: "yyy", value: "yyy" },
};

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
  if (
    element.dataType === "dropdown" &&
    a[element.key]?.value &&
    element.attribute
  ) {
    const attributeArray = JSON.parse(element.attribute);
    return attributeArray.includes(a[element.key].value);
  }
  return true; // Skip non-dropdown elements
});

console.log(result);

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

const result = attributes.every((element: any) => {
  if (
    element.dataType === AttributeDataType.DROPDOWN &&
    containerInUseAttributes.attributes[element.key]?.value &&
    element.attributeValues
  ) {
    const attributeArray = JSON.parse(element.attributeValues);
    return attributeArray.includes(
      containerInUseAttributes.attributes[element.key].value
    );
  }
  return true;
});

const containerInUseAttributes = await this._container.findOne({
  where: {
    tenantId: id,
  },
  select: ["attributes"],
});
if (containerInUseAttributes) {
  if (
    !checkAttributesInUseInContainer(
      attributes,
      containerInUseAttributes.attributes
    )
  ) {
    throw TenantError.attributesInUseInContainer();
  }
}


const attributeValidator = (attributes: any) => {
  const inValidKey = (str: string) => {
    return !/^[a-z0-9_]*$/.test(str);
  };
  const validAttrs =
    attributes.filter((attribute: any) => {
      return (
        (attribute.key.length > 0 && attribute.label.length <= 0) ||
        (attribute.key.length <= 0 && attribute.label.length > 0) ||
        inValidKey(attribute.key as string) ||
        !attribute.key ||
        !attribute.label ||
        (attribute.dataType === AttributeDataType.DROPDOWN &&
          attribute.attributeValues.length <= 0) ||
        (attribute.dataType === AttributeDataType.TEXT &&
          attribute.attributeValues.length > 0) ||
        (attribute.attributeValues.length > 0 &&
          JSON.parse(attribute.attributeValues) > 20)
      );
    }).length <= 0;
  if (!validAttrs || attributes?.length > 20)
    throw CommonError.commonSomethingWentWrongError();
};