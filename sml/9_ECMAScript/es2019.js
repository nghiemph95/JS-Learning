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

/** String.prototype.{trimStart, trimEnd} */
" Easy Frontend ".trim(); // 'Easy Frontend' - bỏ khoảng trắng cho cả đầu và cuối
// ES2019 - bỏ khoảng trắng đầu hoặc cuối
"Easy Frontend".trimStart(); // 'Easy Frontend'
" Easy Frontend ".trimStart(); // 'Easy Frontend '
"Easy Frontend".trimEnd(); // 'Easy Frontend'
" Easy Frontend ".trimEnd(); // ' Easy Frontend'

/** Symbol.prototype.description - Thêm phần mô tả cho Symbol */
const sym = Symbol("description goes here");
sym.description; // 'description goes here'
sym.toString(); // 'Symbol(desc)'

/** Optional catch binding */
// Trước ES2019
function parseStudentFromJSON(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    // in case of failed to parse, simply return undefined
    return undefined;
    // error is unused 😭
  }
}

// Sau ES2019
function parseStudentFromJSON(str) {
  try {
    return JSON.parse(str);
  } catch {
    // in case of failed to parse, simply return undefined
    return undefined;
  }
}

/** Array.prototype.sort() is guaranteed to be stable - trong trường hợp những phần tử bằng nhau thì nó sẽ giữ nguyên thứ tự trong
 * mảng ban đầu
 */
[
  { id: 1, name: "Alice" }, // Alice giống nhau
  { id: 3, name: "John" },
  { id: 2, name: "Bob" },
  { id: 4, name: "Alice" }, // Alice giống nhau nhưng vẫn giữ nguyên thứ tự ban đầu
].sort((s1, s2) => {
  if (s1.name > s2.name) return 1;
  if (s1.name < s2.name) return -1;
  return 0;
});
// output
// [
// { id: 1, name: 'Alice' },
// { id: 4, name: 'Alice' },
// { id: 2, name: 'Bob' },
// { id: 3, name: 'John' },
// ]

/** Revised Function.prototype.toString() */
function /* this is bar */ bar() {}
// BEFORE
bar.toString(); //'function bar() {}
// ES2019
bar.toString(); // 'function /* this is bar */ bar () {}'

// for built-in function
Math.trunc.toString();
// function trunc() { [native code] }
