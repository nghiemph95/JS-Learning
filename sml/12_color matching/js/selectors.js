// query các thẻ li của các ô màu
export function getColorElementList() {
  return document.querySelectorAll('#colorList > li');
}

export function getTimerElement() {
  return document.querySelector('.game .game__timer');
}

export function getPlayAgainButton() {
  return document.querySelector('.game .game__button');
}

export function getColorBackground() {
  return document.querySelector('.color-background');
}

// lấy ra thẻ ul
export function getColorListElement() {
  return document.getElementById('colorList');
}

// lấy những thẻ li ko có class là active
export function getInActiveColorList() {
  return document.querySelectorAll('#colorList > li:not(.active)');
}
