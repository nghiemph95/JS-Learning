// TODOs-
// 1. Generating colors using https://github.com/davidmerfield/randomColor
// 2. Attach item click for all li elements
// 3. Check win logic
// 4. Add timer
// 5. Handle replay click

import { GAME_STATUS, PAIRS_COUNT } from './constants.js';
import { getColorElementList, getColorListElement, getInActiveColorList } from './selectors.js';
import { getRandomColorPairs, showReplayButton, showText } from './utils-practice.js';

// Khai báo biến global
let tempSelected = [];
let gameStatus = GAME_STATUS.PLAYING;

// Hàm khỏi tạo màu sắc, mỗi lần refresh hay load lại trang sẽ gen ra 1 bảng màu khác
function initColor() {
  //mảng 16 màu sau khi được generate
  const finalColorList = getRandomColorPairs(PAIRS_COUNT);
  // gắn màu vô từng thẻ li
  const liList = getColorElementList();

  liList.forEach((liElement, index) => {
    // tạo data color cho từng liElement
    liElement.dataset.color = finalColorList[index];
    // query class overlay
    const overlayElement = liElement.querySelector('.overlay');
    overlayElement.style.backgroundColor = finalColorList[index];
  });
}

// hàm kiểm tra tính thắng thua
function checkWinLogic(liElement) {
  if (!liElement) return;

  /** check before click */
  // kiểm tra trạng thái của game
  const blockClick = [GAME_STATUS.BLOCKING, GAME_STATUS.FINISHED].includes(gameStatus);
  // const isClicked = liElement.classList.contains('active');
  if (blockClick) return;

  // hiện màu khi click vào thẻ li
  liElement.classList.add('active');

  /** check after click */
  // lưu thông tin click vào mảng tạm để kiểm tra
  tempSelected.push(liElement);

  // kiểm tra sau 2 lần click có trùng hoặc ko
  // trường hợp matching
  if (tempSelected.length < 2) return;

  const firstClicked = tempSelected[0].dataset.color;
  const secondClicked = tempSelected[1].dataset.color;
  const isMatch = firstClicked === secondClicked;

  if (isMatch) {
    // kiểm tra 16 ô đã match hết chưa
    const isWin = getInActiveColorList().length === 0;

    if (isWin) {
      // hiển thị nút replay
      showReplayButton();
      // hiển thị youwin
      showText('YOU WIN !');
      // update game status
      gameStatus = GAME_STATUS.FINISHED;
    }

    // reset mảng tạm và không làm gì nữa
    tempSelected = [];
    return;
  }

  // trường hợp không matching
  // chăn không cho click ô thứ 3
  gameStatus = GAME_STATUS.BLOCKING;
  console.log(gameStatus);
  // xóa bỏ class active với 2 liElement khong match
  setTimeout(() => {
    tempSelected[0].classList.remove('active');
    tempSelected[1].classList.remove('active');

    // reset mảng tạm cho lượt check kế tiếp
    tempSelected = [];

    // cập nhật game status
    gameStatus = GAME_STATUS.PLAYING;
  }, 500);
}

// hàm handle màu sắc trong liElement
function handleColorClick(liElement) {
  //validation
  if (!liElement) return;

  // kiểm tra tính thắng thua
  checkWinLogic(liElement);
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
