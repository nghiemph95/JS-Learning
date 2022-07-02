export function countWordsV1(wordList, n) {
  if (!Array.isArray(wordList) || wordList.length === 0) return 0;

  let count = 0;

  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i].length >= n) {
      count++;
    }
  }
  return count;
}

export function countWords(wordList, n) {
  if (!Array.isArray(wordList) || wordList.length === 0) return 0;

  return wordList.filter((element) => element.length >= n).length;
}

export function countWords(wordList, n) {
  if (!Array.isArray(wordList) || wordList.length === 0) return 0;

  return wordList.findIndex((e) => e.length >= n);
}

console.log(countWords(["easy", "frontend"], 5));
