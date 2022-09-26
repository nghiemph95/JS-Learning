import { getColorBackground, getPlayAgainButton, getTimerElement } from './selectors.js';

// hàm shuffle colorList
function shuffle(finalColorList) {
  if (!Array.isArray(finalColorList) || finalColorList.length <= 2) return finalColorList;

  // shuffle algorithm
  for (let i = finalColorList.length - 1; i > 1; i--) {
    const j = Math.floor(Math.random() * i);

    let temp = finalColorList[i];
    finalColorList[i] = finalColorList[j];
    finalColorList[j] = temp;
  }
}

// hàm random color sử dụng thư viện randomColor
export function getRandomColorPairs(colorCount) {
  const colorList = [];

  const hueList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome'];

  //random theo thứ tự màu trong hueList tương ứng với 8 màu
  for (let i = 0; i < colorCount; i++) {
    const color = window.randomColor({
      luminosity: 'dark',
      hue: hueList[i % hueList.length],
      alpha: 0.5,
    });

    colorList.push(color);
  }

  // nhân đôi màu để được mỗi cặp màu tương ứng
  const finalColorList = [...colorList, ...colorList];
  // shuffle finalColorList
  shuffle(finalColorList);

  return finalColorList;
}

// hàm hiển thị nút replay
export function showReplayButton() {
  getPlayAgainButton().classList.add('show');
}

// hàm hide nút replay
export function hideReplayButton() {
  getPlayAgainButton().classList.remove('show');
}

// hiển thị text
export function showText(text) {
  getTimerElement().textContent = text;
}

// countdown
export function createCountdown({ seconds, onChange, onFinish }) {
  let intervalId = null;
  // sử dụng closure
  function startTime() {
    resetTime();
    //truyền tham số thời gian đầu vào, tránh sử dụng tham số hàm
    let inputSecond = seconds;
    // sử dụng hàm interval để countdown
    intervalId = setInterval(() => {
      onChange?.(inputSecond);

      inputSecond--;
      if (inputSecond < 0) {
        resetTime();
        onFinish?.();
      }
    }, 1000);
  }

  function resetTime() {
    clearInterval(intervalId);
  }

  return {
    startTime,
    resetTime,
  };
}

// hàm set background color khi matching
export function setBackgroundColor(color) {
  const currentColor = getColorBackground();
  currentColor.style.backgroundColor = color;
}
