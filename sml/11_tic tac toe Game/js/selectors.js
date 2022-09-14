// Implement selector function to get elements needed
// 1. Cell List
// 2. Current Turn
// 3. Replay Game
// 4. Game status

// lấy danh sách các ô
export function getCellElementList() {
  return document.querySelectorAll("#cellList > li");
}

// lấy turn để đổi X -> O
export function getCurrentTurnElement() {
  return document.getElementById("currentTurn");
}

// lấy vị trí của các X và O trên bàn
export function getCellElementAtIdx(index) {
  return document.querySelector(`#cellList > li:nth-child(${index + 1})`);
}

// lấy status của game
export function getGameStatusElement() {
  return document.getElementById("gameStatus");
}

export function getReplayButtonElement() {
  return document.getElementById("replayGame");
}

// lấy thẻ ul
export function getCellListElement() {
  return document.getElementById("cellList");
}
