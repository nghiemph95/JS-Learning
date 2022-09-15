import { GAME_STATUS, TURN } from "./constants.js";
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

  // toggle current turn
  toggleTurn();
}

//Bind click event for all cells (liElements)
function initCellElementList() {
  const liElementCellList = getCellElementList();

  liElementCellList.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(cell, index));
  });
}

//main
(() => {
  //bind click event for all cells (liElement)
  initCellElementList();
})();
