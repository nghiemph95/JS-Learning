export function statisticsCharacters(str) {
  if (str === "") return {};

  const check = {};

  str
    .split(" ")
    .join("")
    .split("")
    .forEach((element) => {
      if (check[element]) {
        check[element] += 1;
      } else {
        check[element] = 1;
      }
      check["space"] = str.length - str.split(" ").length - 1;
    });
  return check;
}
