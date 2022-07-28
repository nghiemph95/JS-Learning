/** Using stack */

function getOpenBracket(closingBracket) {
  if (closingBracket === "]") return "[";
  if (closingBracket === "}") return "{";
  if (closingBracket === ")") return "(";

  return;
}

function isValidBracketPairs(str) {
  if (str === "") return true;

  const OPENING_BRACKETS = ["[", "{", "("];
  const CLOSING_BRACKETS = ["]", "}", ")"];
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const character = str[i];

    if (OPENING_BRACKETS.includes(character)) {
      stack.push(character);
      continue;
    }

    if (CLOSING_BRACKETS.includes(character)) {
      const openBracket = getOpenBracket(character);
      if (stack[stack.length - 1] !== openBracket) return false;
      stack.pop();
    }
  }
  return stack.lenght === 0;
}
