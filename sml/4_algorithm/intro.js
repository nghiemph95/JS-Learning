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

const compareAssignedListChanged = (newList, oldList) => {
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


console.log(compareAssignedListChanged([3, 2], [1, 2, 3]));