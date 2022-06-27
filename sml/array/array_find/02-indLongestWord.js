function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return "";

  let max = wordList[0];
  for (let i = 1; i < wordList.length; i++) {
    if (wordList[i] > max && wordList[i].indexOf(" ") === 0) {
      max = wordList[i];
    }
  }
  return max;
}

function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return "";

  let max = wordList[0];
  wordList.forEach((element) => {
    if (element > max && element.indexOf(" ") === 0) {
      max = element;
    }
  });
  return max;
}

export function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return "";

  return wordList.reduce((pre, cur) =>
    (cur && cur.indexOf(" ") === 0) > (pre && pre.indexOf(" ") === 0)
      ? cur
      : pre
  );
}
// console.log(findLongestWord(["super", "cool", "super cool"]));

// console.log(["super", "super cool"].find());
