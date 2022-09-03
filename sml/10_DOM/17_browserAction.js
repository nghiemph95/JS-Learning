/** Event
 * 1. Mousedown: nhấn chuột để selection
 * 2. Click on: Check input
 * 3. Click on anchor tag: Click vô thẻ
 * ...
 */

/** Làm sao để ngăn chặn không sử dụng default action
 * HTML onevent attributes: return false;
 * JS onevent properties: return false;
 * JS addEventListener: event.preventDefault()
 */

//HTML onevent attributes: return false
<a href="https://google.com" onClick="return false">
  Go to Google
</a>;

//JS onevent properties: return false
anchorElement.onClick = function () {
  return false;
};

//JS addEventListener: event.preventDefault()
form.addEventListener("submit", function (event) {
  // prevent from submit tigger browser reload
  event.preventDefault();
});


/** Lưu ý về passive event: 
 * khi bật passive = true cho addEventListener thì handler sẽ ko gọi preventDefault()
 * 
 * ví dụ: đối với sự kiện touchmove trên thiết bị mobile, khi touch lên màn hình -> trigger
 * scrolling -> trình duyệt sẽ đi check có thằng nào đang handle sự kiện
 *  touchmove và nó có sử dụng preventDefault hay ko. Nếu có
 * nó phải cancel cái scrooling -> gây ra tình trạng lác lác giựt giựt
 * 
 * => nên phải bật cái passive = true: nhằm ý nghĩa là ko có sự preventDefault,
 * ko cần phải check nữa. Nên mặc định trên Firefox/Chrome sẽ bật passive = true cho sự kiện touchstart/touchmove
 */