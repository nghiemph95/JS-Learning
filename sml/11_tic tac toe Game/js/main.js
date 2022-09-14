import { CELL_VALUE, GAME_STATUS, TURN } from "./constants.js";
import {
  getCellElementList,
  getCurrentTurnElement,
  getCellElementAtIdx,
  getGameStatusElement,
} from "./selectors.js";
import { checkGameStatus } from "./utils.js";

// console.log(checkGameStatus(["X", "O", "O", "", "X", "", "", "O", "X"]));

/**
 * Global variables
 */
let currentTurn = TURN.CROSS;
let isGameEnded = false;
let cellValues = new Array(9).fill("");

function toggleTurn() {
  //toggle turn
  currentTurn = currentTurn === TURN.CIRCLE ? TURN.CROSS : TURN.CIRCLE;

  // update turn on DOM element
  const currentTurnElement = getCurrentTurnElement();
  if (currentTurnElement) {
    currentTurnElement.classList.remove(TURN.CIRCLE, TURN.CROSS);
    currentTurnElement.classList.add(currentTurn);
  }
}

function handleCellClick(cell, index) {
  // check cell is already cross/circle
  if (
    cell.classList.contains(TURN.CIRCLE) ||
    cell.classList.contains(TURN.CROSS)
  )
    return;

  //set selected cell
  cell.classList.add(currentTurn);

  //update cellValues
  cellValues[index] =
    currentTurn === TURN.CIRCLE ? CELL_VALUE.CIRCLE : CELL_VALUE.CROSS;

  // toggle turn
  toggleTurn();

  // check game status
  const game = checkGameStatus(cellValues);
  switch (game.status) {
    case GAME_STATUS.ENDED: {
      //update game status
      //show replace buttong
      break;
    }
    case GAME_STATUS.X_WIN:
    case GAME_STATUS.O_WIN: {
      //update game status
      //show replay button
      //highlight win cells
      break;
    }

    default:
    //playing
  }
  console.log("click", cell, index);
}

function initCellElementList() {
  const cellElementList = getCellElementList();
  cellElementList.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(cell, index));
  });
}

/**
 * TODOs
 *
 * 1. Bind click event for all cells
 * 2. On cell click, do the following:
 *    - Toggle current turn
 *    - Mark current turn to the selected cell
 *    - Check game state: win, ended or playing
 *    - If game is win, highlight win cells
 *    - Not allow to re-click the cell having value.
 *
 * 3. If game is win or ended --> show replay button.
 * 4. On replay button click --> reset game to play again.
 *
 */

(() => {
  // bind click event for all li element
  initCellElementList();
  // bind click event for replay button
})();
