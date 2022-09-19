import { GAME_STATUS, PAIRS_COUNT } from './constants.js';
import { getRandomColorPairs } from './utils.js';

// Global variables
let selections = [];
let gameState = GAME_STATUS.PLAYING;

// TODOs
// 1. Generating colors using https://github.com/davidmerfield/randomColor
// 2. Attach item click for all li elements
// 3. Check win logic
// 4. Add timer
// 5. Handle replay click
// console.log(getRandomColorPairs(16));

function initColors() {
  // random 8 colors
  const colorList = getRandomColorPairs(PAIRS_COUNT); // 16 colors
  
  // bind to li > div.overlay
  const liList = getColorElementList();
  liList.forEach((liElement, index) => {
    const overlayElement = liElement.querySelector('.overlay');
    if (overlayElement) overlayElement.style.backgroundColor = colorList[index];
  });
}

//main
(() => {
  initColors();
})();
