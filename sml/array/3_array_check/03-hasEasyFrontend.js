/** Kiểm tra có từ easy frontend có trong mảng hay không */
export function hasEasyFrontend(wordList) {
  if (!Array.isArray(wordList)) return false;

  return (
    wordList.filter(
      (_, i) =>
        (wordList[i] === "easy" && wordList[i + 1] === "frontend") ||
        wordList[i] === "easy frontend"
    ).length > 0
  );

  //   for (let i = 0; i < wordList.length; i++) {
  //     if (wordList[i] === "") return false;

  //     if (
  //       (wordList[i] === "easy" && wordList[i + 1] === "frontend") ||
  //       wordList[i] === "easy frontend"
  //     )
  //       return true;
  //   }
}
// console.log(hasEasyFrontend(["easy", "frontend"]));
