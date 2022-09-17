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
import { getCellElementList } from "./selectors.js";

/** Global variable */
let currentTurn = TURN.CROSS;
let gameStatus = GAME_STATUS.PLAYING;
let cellValues = new Array(9).fill("");

// Hàm handle sự kiện click
function handleCellClick(cell, index) {
  console.log("click", cell, index);
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
