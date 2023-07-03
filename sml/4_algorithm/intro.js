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