/** 
 * Period  Height
0          1
1          2
2          3
3          6
4          7
5          14

    //0 -> 1
    //1 -> 1 x 2 = 2
    //2 -> 2 + 1 = 3
    //3 -> 3 x 2 = 6
    //4 -> 6 + 1 = 7
    //5 -> 7 x 2 = 14

Cây phát triển theo chu kỳ: period 1: x2 heigth, period 2: heigth + 1
 */

function utopianTree(n) {
  // Write your code here
  //0 -> 1
  //1 -> 1 x 2 = 2
  //2 -> 2 + 1 = 3
  //3 -> 3 x 2 = 6
  //4 -> 6 + 1 = 7
  //5 -> 7 x 2 = 14

  return Array.from({ length: n }, (_, i) => i + 1).reduce((pre, cur, idx) => {
    if (!(idx % 2)) {
      pre *= 2;
    } else {
      pre++;
    }
    return pre;
  }, 1);
}