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
