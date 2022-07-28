const categoryList = [
  { id: 1, name: "iphone" },
  { id: 2, name: "macbook" },
];

//using object
function buildCategoryMapV1(categoryList) {
  const catMap = categoryList.reduce((map, element) => {
    map[element.id] = element;
    return map;
  }, {});
  return catMap;
}

console.log(buildCategoryMapV1(categoryList));

console.log(buildCategoryMapV2(categoryList));

// using Map
function buildCategoryMapV2(categoryList) {
  const cateMap = new Map();
  categoryList.forEach((element) => {
    cateMap.set(element.id, element);
  });
  return cateMap;
}
