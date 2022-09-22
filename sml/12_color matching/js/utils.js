import { getColorBackground, getPlayAgainButton, getTimerElement } from './selectors.js';

function shuffle(arr) {
  if (!Array.isArray(arr) || arr.length <= 2) return arr;

  for (let i = arr.length - 1; i > 1; i--) {
    const j = Math.floor(Math.random() * i);

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

export const getRandomColorPairs = (count) => {
  // receive count --> return count * 2 random colors
  // using lib: https://github.com/davidmerfield/randomColor

  const colorList = [];

  const hueList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome'];

  //random "count" color
  for (let i = 0; i < count; i++) {
    const color = window.randomColor({
      luminosity: 'dark',
      hue: hueList[i % hueList.length],
    });

    colorList.push(color);
  }

  // double current color list
  const fullColorList = [...colorList, ...colorList];
  // shuffle
  shuffle(fullColorList);

  return fullColorList;
};

export function showPlayAgainButton() {
  const playAgainButton = getPlayAgainButton();
  if (playAgainButton) playAgainButton.classList.add('show');
}

export function hidePlayAgainButton() {
  const playAgainButton = getPlayAgainButton();
  if (playAgainButton) playAgainButton.classList.remove('show');
}

export function setTimerText(text) {
  const timerElement = getTimerElement();
  if (timerElement) timerElement.textContent = text;
}

// hàm createTimer
export function createTimer({ seconds, onChange, onFinish }) {
  let intervalId = null;

  // sử dụng closure
  function start() {
    // trường hợp cho chắc thì trước khi chạy, cần phải clear trước
    clear();
    // để đảm bảo không thay đổi tham số đầu vào, mình cần gán 1 giá trị để hàm có thể chạy từ đó
    let currentSecond = seconds;
    // khi start cứ sau 1s nó sẽ gọi hàm setInterval
    intervalId = setInterval(() => {
      onChange?.(currentSecond);

      currentSecond--;
      if (currentSecond < 0) {
        clear();
        onFinish?.();
      }
    }, 1000);
  }

  function clear() {
    clearInterval(intervalId);
  }

  return {
    start,
    clear,
  };
}

// hàm setBackground Color
export function setBackgroundColor(colorMatch) {
  const currentColorBackground = getColorBackground();
  if (currentColorBackground) currentColorBackground.style.backgroundColor = colorMatch;
}
