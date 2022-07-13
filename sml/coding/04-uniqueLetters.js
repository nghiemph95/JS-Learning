export function uniqueLetters(str) {
  if (typeof str !== "string" || str.length === 0) return "";

  return str
    .split("")
    .filter((element) => {
      return str.lastIndexOf(element) === str.indexOf(element);
    })
    .join("");
}
console.log(uniqueLetters("easy frontend"));
