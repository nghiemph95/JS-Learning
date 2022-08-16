/** thực hiện 1 cái hàm nào đây sau 1 khoảng thời gian nhất định */

/** cả setInterval và setTimeout đều dùng chung pool cho intervalID và timeoutID nên có thể dùng
 * hàm clearTimeout cho IntervalID và ngược lại
 */

/** Interval overview */
const intervalId = setInterval(() => {
  console.log("Hey, are you there?");
}, 2000);

clearInterval(intervalId);

function countDown() {}
