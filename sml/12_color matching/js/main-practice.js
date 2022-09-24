// TODOs-
// 1. Generating colors using https://github.com/davidmerfield/randomColor
// 2. Attach item click for all li elements
// 3. Check win logic
// 4. Add timer
// 5. Handle replay click

import { PAIRS_COUNT } from './constants.js';
import { getColorElementList, getColorListElement } from './selectors.js';
import { getRandomColorPairs } from './utils-practice.js';

// Hàm khỏi tạo màu sắc, mỗi lần refresh hay load lại trang sẽ gen ra 1 bảng màu khác
function initColor() {
  //mảng 16 màu sau khi được generate
  const finalColorList = getRandomColorPairs(PAIRS_COUNT);
  console.log(finalColorList);
  // gắn màu vô từng thẻ li
  const liList = getColorElementList();

  liList.forEach((liElement, index) => {
    // query class overlay
    const overlayElement = liElement.querySelector('.overlay');
    overlayElement.style.backgroundColor = finalColorList[index];
  });
}

// hàm handle màu sắc trong liElement
function handleColorClick(liElement) {
  //validate
  if (!liElement) return;

  // hiện màu khi click vào thẻ li
  liElement.classList.add('active');
}

// hàm add sự kiện click cho liElement
function createClickEventForLiElement() {
  const ulElement = getColorListElement();

  // sử dụng kỷ thuật event delegation nhằm add sự kiện click cho thằng cha
  ulElement.addEventListener('click', (event) => {
    if (event.target.tagName !== 'LI') return;

    handleColorClick(event.target); //liElement
  });
}

//main
(() => {
  // khởi tạo màu sắc
  initColor();

  // tạo sự kiện click cho các liElement
  createClickEventForLiElement();
})();
