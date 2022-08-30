/** Mục đích:
 * 1. Các loại event phổ biến
 * 2. Có bao nhiêu cách gắn event
 * 3. Remove event
 */

/** Các loại event phổ biến
 * 1. Mouse event: Click, contextmenu, mouseover, mouseup, mousedown...
 * 2. Keyboard events: keydown, keyup
 * 3. Form element events: submit, focus
 * 4. Document events: DOMContentLoad
 * 5. Window events: beforeunload (khi load lại trang sẽ hỏi lại user có đồng ý load hay ko)
 */

/** Có bao nhiêu cách gắn event
 * 1. HTML onevent attribute: NOT RECOMMENDED
 * 2. JS onevent properties: Nhược điểm chỉ adđ đc 1 handler
 * 3. JS addEventListener: RECOMMENDED: Add được nhiều handler
 */

// HTML onevent attribute:
<button onclick="alert('test')">Click me</button>;

// JS onevent properties
<button id="clickMeButton">Click me</button>;

const clickMeButton = document.getElementById("clickMeButton");
if (clickMeButton) {
  // add only one handler
  clickMeButton.onclick = function () {
    alert("test");
  };
}

//JS addEventListener
<button id="clickMeButton">Click me</button>;

const clickMeButton1 = document.getElementById("clickMeButton");
if (clickMeButton1) {
  clickMeButton1.addEventListener("click", () => {
    alert("test");
  });

  clickMeButton1.addEventListener("click", () => {
    alert("test11");
  });
}

// Remove event
