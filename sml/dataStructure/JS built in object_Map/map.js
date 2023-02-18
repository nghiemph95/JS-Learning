// Using ES6
const cityList = [
  { id: 1, name: "TP. Hồ Chí Minh" },
  { id: 2, name: "TP. Phan Thiết" },
];

const studentList = [
  { id: 123, name: "Alice", cityId: 1 },
  { id: 321, name: "Bob", cityId: 2 },
];

// How to show city name for each student?
const cityMap = cityList.reduce((map, city) => {
  map[city.id] = city;
  console.log(map);
  return map;
}, {});

// Using Map
const cityMaps = new Map();
cityList.forEach((element) => {
  cityMaps.set(element.id, element);
});

const cityMapss = cityList.reduce((map, city) => {
  map.set(city.id, city);
  return map;
}, new Map());

console.log(cityMapss.get(1).name);


/** Khi nào xài Map , xài Object
 * 1. Size: Map -> using map.size, Object -> Object.keys(obj).lenght
 * dữ liệu nhiều và thay đổi nhiều thì nên dùng Map để đảm bảo performance
 */