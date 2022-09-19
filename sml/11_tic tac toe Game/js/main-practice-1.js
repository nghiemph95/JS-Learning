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
import {
  getCellElementAtIdx,
  getCellElementList,
  getCurrentTurnElement,
  getGameStatusElement,
  getReplayButtonElement,
} from "./selectors.js";

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

// Cập nhật gameStatus khi game END hoặc WIN
function updateGameStatus(newGameStatus) {
  gameStatus = newGameStatus;
  const gameStatusElement = getGameStatusElement();
  gameStatusElement.textContent = newGameStatus;
}

// khi game end hoặc win, show replay button
function showReplayButton() {
  const replayButtonElement = getReplayButtonElement();
  replayButtonElement.classList.add("show");
}

// khi WIN, highlight cell
function highlightWinCells(winPositions) {
  winPositions.forEach((position) => {
    getCellElementAtIdx(position).classList.add("win");
  });
}

// Hàm handle sự kiện click
function handleCellClick(cell, index) {
  console.log("click", cell, index);

  // Nếu ô đã được click thì sẽ không cho click nữa
  const isClicked =
    cell.classList.contains(TURN.CROSS) || cell.classList.contains(TURN.CIRCLE);

  const isEnd = gameStatus !== GAME_STATUS.PLAYING;
  if (isClicked || isEnd) return;

  // turn đầu tiên sẽ là X
  cell.classList.add(currentTurn);

  // chuyển đổi X sang O và ngược lại
  changeTurn();

  // khởi tạo cellValues
  cellValues[index] =
    currentTurn === TURN.CIRCLE ? CELL_VALUE.CIRCLE : CELL_VALUE.CROSS;

  // gắn hàm checkStatus vào handleClick
  const game = checkGameStatus(cellValues);
  switch (game.status) {
    case GAME_STATUS.ENDED: {
      // update game status
      updateGameStatus(game.status);
      // show replay button
      showReplayButton();
      break;
    }
    case GAME_STATUS.X_WIN:
    case GAME_STATUS.O_WIN: {
      // update game status
      updateGameStatus(game.status);
      // show replay button
      showReplayButton();
      // hightlight win cells
      highlightWinCells(game.winPositions);
      break;
    }

    default:
    // playing
  }
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

  // vị trí của các trường hợp win và phải được điền đủ 3 cell
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
    //Nếu fill đủ 3 vị trí và cả 3 có giá trị giống nhau thì return ra index
    const first = cellValueList[winLocation[0]];
    const second = cellValueList[winLocation[1]];
    const third = cellValueList[winLocation[2]];

    return first !== "" && first === second && second === third;
  });

  console.log("winLocationIndex", winLocationIndex);

  //win
  // lấy ra giá trị của cell đó là X hoặc O
  if (winLocationIndex >= 0) {
    const indexWinValue = winLocationIndexList[winLocationIndex][0]; // [0,3,6] -> 0
    const cellValue = cellValueList[indexWinValue]; // X hoặc là O
    // console.log(winLocationIndexList[winLocationIndex]);

    return {
      status:
        cellValue === CELL_VALUE.CIRCLE ? GAME_STATUS.O_WIN : GAME_STATUS.X_WIN,
      winPositions: winLocationIndexList[winLocationIndex],
    };
  }

  //end
  const indexToEnd = cellValueList.filter((e) => e === "").length === 0;

  return {
    status: indexToEnd ? GAME_STATUS.ENDED : GAME_STATUS.PLAYING,
    winPositions: [],
  };
}

// console.log(checkGameStatus(["X", "O", "O", "X", "", "", "X", "O", ""]));

/** run game */
(() => {
  //Click event to cells
  initCellEventClick();
})();
