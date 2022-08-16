/** thực hiện 1 cái hàm nào đây sau 1 khoảng thời gian nhất định */

/** cả setInterval và setTimeout đều dùng chung pool cho intervalID và timeoutID nên có thể dùng
 * hàm clearTimeout cho IntervalID và ngược lại
 */

/** Interval overview */
const intervalId = setInterval(() => {
  console.log("Hey, are you there?");
}, 2000);

clearInterval(intervalId);

/** Example interval */
//Không nên thay đổi tham số đầu vào, nếu muốn thay đổi nên tạo 1 biến riêng. Ví dụ cần check dữ liệu đầu vào là bn thì vô tình mất dữ liệu
function countDown(second) {
  let currentSecond = second;

  const intervalId = setInterval(() => {
    console.log(currentSecond);

    if (currentSecond <= 0) clearInterval(intervalId);

    currentSecond--;
  }, 1000);
}

countDown(20);
