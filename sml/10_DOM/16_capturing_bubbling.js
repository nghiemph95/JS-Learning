/** capture : là chạy từ trên xún dưới
 * bubbling: là chạy ngược lại từ dưới lên trên
 */

/** event
 * 1.event.target: trỏ tới cái original(deepest element)
 * 2.event.currentTaget: trỏ tới cái current element
 * 3.event.eventPhase: cho mình biết đang ở phase nào
 * 4.event.stopPropagation(): dừng bubbling
 * 5.event.stopImmediatePropagation(): dừng bubbling + dừng luôn những thằng đang attach listening
 */

/** tuy nhiên: phải lưu ý sử dụng stopPropagation
 * ví dụ: khi sử dụng tracking trên window mà nếu có sử dụng
 * stopPropagation thì việc dừng bubbling lên sẽ làm cho event tracking không
 * hoạt động được dẫn đến deadzone
 */

/** example */
// it will log both div and button click when you click on button
<div onClick="console.log('div click')">
  <button onClick="console.log('button click')">click me</button>
</div>;

//ngăn chặn sự kiện bubble lên thằng cha bằng cách sử dụng event.stopPropagation
<div onClick="console.log('div click')">
  <button id="buttonId">click me</button>
</div>;

const button = document.getElementById("buttonId");
if (button) {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("button click");
  });

  button.click(); // sự kiện click event của thẻ dev sẽ không được thực hiện
}

//ngăn chạn sự kiện bubble lên thằng cha và stop event listener
<div onclick="console.log('div click')">
  <button id="buttonId">click me</button>
</div>;

const buttonV1 = document.getElementById("buttonId");
if (buttonV1) {
  buttonV1.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    console.log("button click");
  });

  // button click
  // the second click event + div click event are not triggered
  buttonV1.addEventListener("click", (event) => {
    console.log("tada!!!");
  });

  buttonV1.click();
}
