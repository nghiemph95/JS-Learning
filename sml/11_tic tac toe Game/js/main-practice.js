import { CELL_VALUE, GAME_STATUS, TURN } from "./constants.js";
import {
  getCellElementList,
  getCurrentTurnElement,
  getGameStatusElement,
  getReplayButtonElement,
  getCellElementAtIdx,
} from "./selectors.js";

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

// Show replay button
function showReplayButton() {
  const replayButtonElement = getReplayButtonElement();
  if (replayButtonElement) replayButtonElement.classList.add("show");
}

// Hide replay button
function hideReplayButton() {
  const replayButtonElement = getReplayButtonElement();
  if (replayButtonElement) replayButtonElement.classList.remove("show");
}

// Highlight win cells
function highlightWinCells(winPositions) {
  if (!Array.isArray(winPositions) || winPositions.length !== 3)
    throw new Error("Invalid win position");

  winPositions.forEach((position) => {
    getCellElementAtIdx(position).classList.add("win");
  });
}

//Handle cell clicks
function handleCellClick(cell, index) {
  console.log("click", cell, index);

  // check cell is already cross/circle
  const isClicked =
    cell.classList.contains(TURN.CIRCLE) || cell.classList.contains(TURN.CROSS);
  const isGameEnded = gameStatus !== GAME_STATUS.PLAYING;
  if (isClicked || isGameEnded) return;

  // add selected cell
  cell.classList.add(currentTurn);

  // create cellValues
  cellValues[index] =
    currentTurn === TURN.CIRCLE ? CELL_VALUE.CIRCLE : CELL_VALUE.CROSS;

  // toggle current turn
  toggleTurn();

  //check game status
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
      highlightWinCells(game.winPosition);
      break;
    }

    default:
    // playing
  }
}

// Update game status
function updateGameStatus(newGameStatus) {
  gameStatus = newGameStatus;

  const gameStatusElement = getGameStatusElement();
  if (gameStatusElement) gameStatusElement.textContent = newGameStatus;
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

function resetGame() {
  console.log("click replay button");

  // reset temp global variable
  currentTurn = TURN.CROSS;
  gameStatus = GAME_STATUS.PLAYING;
  cellValues = cellValues.map(() => "");

  // reset DOM elements
  // reset game status
  updateGameStatus(GAME_STATUS.PLAYING);
  // reset currentTurn
  const currentTurnElement = getCurrentTurnElement();
  if (currentTurnElement) {
    currentTurnElement.classList.remove(TURN.CIRCLE, TURN.CROSS);
    currentTurnElement.classList.add(TURN.CROSS);
  }
  // reset gameboard
  const cellElementList = getCellElementList();
  for (const cellElement of cellElementList) {
    cellElement.className = "";
  }
  // hide replay button
  hideReplayButton();
}

function initReplayButton() {
  const replayButton = getReplayButtonElement();
  if (replayButton) {
    replayButton.addEventListener("click", resetGame);
  }
}

//main
(() => {
  //bind click event for all cells (liElement)
  initCellElementList();
  // bind click event for replay button
  initReplayButton();
})();
