function createRandomColorFn(colorList) {
  if (!Array.isArray(colorList))
    throw new Error("colorList should be an array");

  if (colorList.length === 0) throw new Error("colorList should not be empty");

  if (colorList.length === 1)
    throw new Error("colorList should have more than one item");

  let currentIndex = Math.trunc(Math.random() * colorList.length);
  console.log("currentIndex", currentIndex);

  return function randomColor() {
    let nextIndex = Math.trunc(Math.random() * colorList.length);
    console.log("nextIndex", nextIndex);

    while (nextIndex === currentIndex) {
      nextIndex = Math.trunc(Math.random() * colorList.length);
      console.log("NextIndex", nextIndex);
    }
    currentIndex = nextIndex;
    console.log("CurrentIndex", currentIndex);
    return colorList[nextIndex];
  };
}

const colorList = ["red", "green", "yellow"];
const randomColor = createRandomColorFn(colorList);

const currentColor = randomColor();
const nextColor = randomColor();
console.log("currnetColor", currentColor);
console.log("nextColor", nextColor);
