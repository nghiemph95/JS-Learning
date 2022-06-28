function getTicketPrice(ageCustomer) {
  if (ageCustomer <= 0 || ageCustomer > 125) return -1;

  if (ageCustomer >= 6 && ageCustomer <= 12) return 20000;
  if (ageCustomer < 6 || ageCustomer >= 70) return 0;
  if (ageCustomer > 12) return 50000;
}
console.log(getTicketPrice(15));

function sayHello(languageCode) {
  let message = "";

  switch (languageCode) {
    case "en":
      message = "Hello";
      break;
    case "vi":
      message = "Xin chào";
      break;
    case "fr":
      message = "Bonjour";
      break;
    case "cn":
      message = "Nǐn hǎo";
      break;
    case "ja":
      message = "Konnichiwa";
      break;
    case "ko":
      message = "Anyoung haseyo";
      break;
    default:
      message = "Hello";
      break;
  }
  return message;
}

function sayHello(languageCode) {
  const code = {
    en: "Hello",
    vi: "Xin chao",
    fr: "Bonjour",
    cn: "Nǐn hǎo",
    ja: "Konnichiwa",
    ko: "Anyoung haseyo",
  };

  const message = code[languageCode] ? code[languageCode] : "Hello";
  return message;
}

console.log(n);

let count = 1;
const n = count++;

console.log(Number.parseInt(1.5));

console.log((1.34).toFixed(1));

console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log(Number.EPSILON);

console.log(Math.round(Math.random()));

const random = console.log(Math.floor(Math.random() * 24));

/** Random from 0 to n */
function randomNum(n) {
  if (n < 0) return false;

  const random = Math.round(Math.random() * n);

  return random;
}
console.log(randomNum(21));

/** Random from [a, b] */
function randNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
console.log(randNum(2, 4));

/** Math n*/
/** Odd/Even */
function isEven(n) {
  return n % 2 === 0;
}

function isPerfectSquare(n) {
  return Math.trunc(Math.sqrt(n)) ** 2 === n;
}
console.log(isPerfectSquare(36));

/** finding Max */
function findingMax(a, b, c) {
  let max = a;
  if (max < b) max = b;
  if (max < c) max = c;

  return max;
}
console.log(findingMax(4, 5, 1));
/** find max even number  */

function findMaxEven(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;

  if (b % 2 === 0 && b > max) max = b;
  if (c % 2 === 0 && c > max) max = c;
  if (a % 2 === 0 && a > max) max = a;

  return max;
}
console.log(findMaxEven(4, 5, 1));

/** Get the ones of a number have 3 digit */
function extractTheOne(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc((n % 1000) / 100);
}
console.log(extractTheOne(123));
