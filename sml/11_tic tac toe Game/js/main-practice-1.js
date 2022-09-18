/**
 * 1. Găn sự kiện click cho các ô
 * 2. Trên từng ô:
 *  - Chuyển đổi X sang O và ngược lại
 *  - Gán lượt hiện tại cho ô đang được chọn
 *  - Kiểm tra tính thắng thua, kết thúc lượt, chơi lại
 *  - Nếu win thì highlight các ô win
 *  - Không cho click những ô còn lại sau khi win
 */

import { CELL_VALUE, GAME_STATUS, TURN } from "./constants.js";
import { getCellElementList, getCurrentTurnElement } from "./selectors.js";

/** Global variable */
let currentTurn = TURN.CROSS;
let gameStatus = GAME_STATUS.PLAYING;
let cellValues = new Array(9).fill("");

// Hàm nhận biết và chuyển đổi X khi O và người lại
function changeTurn() {
  currentTurn = currentTurn === TURN.CIRCLE ? TURN.CROSS : TURN.CIRCLE;

  // cập nhật turn X/O to DOM element (Hiển thị trên màn hình đang là turn nào)
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

// Hàm kiểm tra tính thắng thua, kết thúc game khi nào, chơi lại
// Truyền vào một array gồm 9 phần tử
function checkGameStatus(cellValueList) {
  if (!Array.isArray(cellValueList) || cellValueList.length !== 9) return;

  // vị trí của các trường hợp win
  const winLocationIndexList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  // kiểm tra tại vị trí win là X hay O
  const winLocationIndex = winLocationIndexList.findIndex((winLocation) => {
    const first = cellValueList[winLocation[0]];
    const second = cellValueList[winLocation[1]];
    const third = cellValueList[winLocation[2]];

    return first !== "" && first === second && second === third;
  });

  // lấy ra giá trị của cell đó là X hoặc O
  if (winLocationIndex >= 0) {
    const indexWinValue = winLocationIndexList[winLocationIndex][0];
    const cellValue = cellValueList[indexWinValue]; // X hoặc là O

    return {
      status:
        cellValue === CELL_VALUE.CIRCLE ? GAME_STATUS.O_WIN : GAME_STATUS.X_WIN,
      winPositions: winLocationIndexList[winLocationIndex],
    };
  }
}

// console.log(checkGameStatus(["X", "O", "O", "", "X", "", "", "O", "X"]));

/** run game */
(() => {
  //Click event to cells
  initCellEventClick();
})();
