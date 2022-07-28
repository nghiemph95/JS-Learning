function getUniqueWords(sentence) {
  if (sentence.length === 0) return [];

  return [...new Set(sentence.split(" "))].length;
}

console.log(getUniqueWords("frontend is easy but easy to die"));
