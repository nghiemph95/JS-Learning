/**
 * 1. Găn sự kiện click cho các ô
 * 2. Trên từng ô:
 *  - Chuyển đổi X sang O và ngược lại
 *  - Gán lượt hiện tại cho ô đang được chọn
 *  - Kiểm tra tính thắng thua, kết thúc lượt, chơi lại
 *  - Nếu win thì highlight các ô win
 *  - Không cho click những ô còn lại sau khi win
 */

import { GAME_STATUS, TURN } from "./constants.js";
import { getCellElementList, getCurrentTurnElement } from "./selectors.js";

/** Global variable */
let currentTurn = TURN.CROSS;
let gameStatus = GAME_STATUS.PLAYING;
let cellValues = new Array(9).fill("");

// Hàm nhận biết và chuyển đổi X khi O và người lại
function changeTurn() {
  currentTurn = currentTurn === TURN.CIRCLE ? TURN.CROSS : TURN.CIRCLE;

  // cập nhật turn X/O to DOM element
  const currentTurnElement = getCurrentTurnElement();
  if (currentTurnElement) {
    currentTurnElement.classList.remove(TURN.CIRCLE, TURN.CROSS);
    currentTurnElement.classList.add(currentTurn);
  }
}

// Hàm handle sự kiện click
function handleCellClick(cell, index) {
  console.log("click", cell, index);

  // Nếu ô đã được click thì sẽ không cho click nữa
  const isClicked =
    cell.classList.contains(TURN.CROSS) || cell.classList.contains(TURN.CIRCLE);
  if (isClicked) return;

  // turn đầu tiên sẽ là X
  cell.classList.add(currentTurn);

  // chuyển đổi X sang O và ngược lại
  changeTurn();
}

// Gắn sự kiện click cho các ô
function initCellEventClick() {
  const liElementCellList = getCellElementList();

  liElementCellList.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(cell, index));
  });
}

/** run game */
(() => {
  //Click event to cells
  initCellEventClick();
})();
