/** làm phẳng array
 *  [1,2,3,[4]] => [1,2,3,4]
 *  [1,2,[[3], 4]] => [1,2,[3],4] => [1,2,3,4]
 */

const arr = [1, 2, [3, 4]];
//Using flat()
console.log(arr.flat());
//Using reduce - concat
console.log(arr.reduce((res, value) => res.concat(value), []));
//decomposition syntax
const resultFlat = (arr) => {
  [].concat(...arr);
};
console.log(resultFlat);
