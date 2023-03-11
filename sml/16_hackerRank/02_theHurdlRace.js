/** Sample Input 0

5 4 -> k = 4: Nhân vật có thể nhảy qua 4 rào chắn, tính toán số còn lại mà nhân vật phải nhảy qua 
đối với rào chắn cao nhất còn lại.
1 6 3 5 2


Sample Output 0

2
 */

function hurdleRace(k, height) {
  // Write your code here
  // using reduce
  return height.reduce((pre, cur) => {
    cur > k && (pre += cur - k);
    cur > k && (k += cur - k);

    return pre;
  }, 0);
}
