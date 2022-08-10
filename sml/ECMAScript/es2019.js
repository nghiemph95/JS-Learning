/** finallied 6/2019 */

/** Flat */
//arr.flat()
[1, 2, [3, 4]].flat(0); // [1, 2, [3, 4]]
[1, 2, [3, 4]].flat(1); // [1, 2, 3, 4]
[1, 2, [[3], 4]].flat(1); // [1, 2, [3], 4]
[1, 2, [[3], 4]].flat(2); // [1, 2, 3, 4]
[1, 2, , 4, 5].flat(); // [1, 2, 4, 5] as empty slot is removed

//arr.flatMap(mapFn)
[5, 20]
  .map((x) => [x, x * 2]) // [ [5, 10], [20, 40] ]
  .flat(1); // [5, 10, 20, 40]

[5, 20].flatMap((x) => [x, x * 2]); // [5, 10, 20, 40]

/** Object.fromEntries */
const student = {
  id: 1,
  name: "Easy Frontend",
};
// ES2017
const entries = Object.entries(student);
// [
// ['id', 1],
// ['name', 'Easy Frontend'],
// ]
// ES2019
Object.fromEntries(entries); // Sau khi gọi lại entries nó sẽ tạo lại object giống như student
// {
// id: 1,
// name: 'Easy Frontend',
// }
