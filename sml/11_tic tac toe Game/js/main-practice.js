import { CELL_VALUE, GAME_STATUS, TURN } from "./constants.js";
import { getCellElementList, getCurrentTurnElement } from "./selectors.js";

/** Global variable */
let currentTurn = TURN.CROSS;
let isEndGame = false;
let gameStatus = GAME_STATUS.PLAYING;
let cellValues = new Array(9).fill("");

/**
 * 1. Bind click event for all cells
 * 2. On cell click, do:
 *  - Toggle current turn (chuyen X -> O -> X)
 *  - Mark current turn to the selected cell
 *  - Check game status
 *  - if game win hightlight win cells
 *  - Not allow to the click cell having value
 *
 * 3. If game is win or ended -> show replay button
 * 4. On replay button -> reset game to play again.
 */

//Toggle turn
function toggleTurn() {
  //toggle turn
  currentTurn = currentTurn === TURN.CIRCLE ? TURN.CROSS : TURN.CIRCLE;

  //update turn X/O to DOM element
  const currentTurnElement = getCurrentTurnElement();
  if (currentTurnElement) {
    currentTurnElement.classList.remove(TURN.CIRCLE, TURN.CROSS);
    currentTurnElement.classList.add(currentTurn);
  }
}

//Handle cell clicks
function handleCellClick(cell, index) {
  console.log("click", cell, index);

  // check cell is already cross/circle
  const isClicked =
    cell.classList.contains(TURN.CIRCLE) || cell.classList.contains(TURN.CROSS);

  if (isClicked) return;

  // add selected cell
  cell.classList.add(currentTurn);

  // update cellValues
  cellValues[index] =
    currentTurn === TURN.CIRCLE ? CELL_VALUE.CIRCLE : CELL_VALUE.CROSS;

  // toggle current turn
  toggleTurn();

  //check game status
}

//Bind click event for all cells (liElements)
function initCellElementList() {
  const liElementCellList = getCellElementList();

  liElementCellList.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(cell, index));
  });
}

//Check game status
function checkGameStatus(cellValueList) {
  if (!Array.isArray(cellValueList) || cellValueList.length !== 9)
    throw new Error("Invalid cell values");

  // win condition
  const indexToWinList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  const indexToWin = indexToWinList.findIndex((caseWin) => {
    const first = cellValueList[caseWin[0]]; // X or O
    const second = cellValueList[caseWin[1]]; // X or O
    const third = cellValueList[caseWin[2]]; // X or O

    return first !== "" && first === second && second === third;
  });

  // if win match condition
  if (indexToWin >= 0) {
    const indexWinValue = indexToWinList[indexToWin][0];
    const cellValue = cellValueList[indexWinValue]; // X or O

    return {
      status:
        cellValue === CELL_VALUE.CIRCLE ? GAME_STATUS.O_WIN : GAME_STATUS.X_WIN,
      winPosition: indexToWinList[indexToWin],
    };
  }

  // if end match condition
  const indexToEnd =
    cellValueList.filter((element) => element === "").length === 0;

  // if playing match condition
  return {
    status: indexToEnd ? GAME_STATUS.ENDED : GAME_STATUS.PLAYING,
    winPosition: [],
  };
}

//Highlight win cells
function highlightWinCells(winPosition) {
  if (!Array.isArray(winPosition) || winPosition.length !== 3)
    throw new Error("Invalid win position");
}

//main
(() => {
  //bind click event for all cells (liElement)
  initCellElementList();
})();
