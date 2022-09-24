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

  return finalColorList;
}
