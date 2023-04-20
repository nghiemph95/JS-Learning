/** Nối chuỗi */
const a = "Pham";
const b = "Nghiem";

const c = `${a} ${b}`;
console.log(c);

for (let i = 0; i < c.length; i++) {
  console.log(c[i]);
}

const name = "Thanh Nghiem";
const words = name.split(" ");
console.log(words.length);
console.log(name[2]);
console.log(name.slide(1));

/** String Capitalize */
function capitalize(str) {
  if (str === "") return "";
  const firstElement = str[0].toUpperCase();
  const thenElement = str.slice(1).toLowerCase();

  return `${firstElement}${thenElement}`;
}

console.log(capitalize(""));
console.log(capitalize("test StRinG FpfA AkkdfE dsfasFEFD"));

/** String Includes */
function hasEmail(str) {
  // return str.includes("@gmail.com");
  return str.indexOf("@gmail.com") >= 0;
}
console.log(hasEmail("abc@gmail.com"));
console.log(hasEmail("abc@gmail"));

/** String Parameterize */
function parameterize(str) {
  // return str.toLowerCase().replaceAll("", "-");
  return str.toLowerCase().split(" ").join("");
}

console.log(parameterize("Codeê JS Fun"));

/** String truncate */
function truncate(text, maxLength) {
  if (text.length <= maxLength) return text;

  const sortStr = text.slice(0, maxLength - 1);
  return `${sortStr}\u2026`;
}
console.log(truncate("Nghiem", 4));

/** removeVowel */
function removeVowel(str) {
  if (str === "") return "";
  return str
    .replace(/[aeiou]/gi, "")
    .split(" ")
    .join("");
}
console.log(removeVowel("     ighiema    "));

/** format second */
function formatSeconds(seconds) {
  if (seconds < 0 || seconds >= 60 || seconds === "") return "";

  if (seconds >= 0 && seconds < 10) {
    return `${0}${seconds}`;
  } else {
    return `${seconds}`;
  }
}

console.log(formatSeconds(5));

function formatSecondsV2(seconds) {
  if (seconds < 0 || seconds >= 60 || seconds === "") return "";
  return `0${seconds}`.slice(-2);
}

console.log(formatSecondsV2(12));

/** Format Time */
const SECOND_PER_HOUR = 3600;
const SECOND_PER_MIN = 60;

function formatTime(seconds) {
  if (seconds === "") return "";

  const hrs = Math.floor(seconds / SECOND_PER_HOUR);
  const mins = Math.floor((seconds % SECOND_PER_HOUR) / SECOND_PER_MIN);
  const secs = Math.floor(seconds % SECOND_PER_MIN);

  if (seconds >= 0 && seconds < SECOND_PER_MIN) {
    return "00:00:" + `0${seconds}`.slice(-2);
  } else if (seconds >= SECOND_PER_MIN && seconds < SECOND_PER_HOUR) {
    return "00:" + `0${mins}`.slice(-2) + ":" + `0${secs}`.slice(-2);
  } else {
    return (
      `0${hrs}`.slice(-2) +
      ":" +
      `0${mins}`.slice(-2) +
      ":" +
      `0${secs}`.slice(-2)
    );
  }
}

console.log(formatTime(0));

console.log(hrs, mins, secs);

/** Check secure Url */
console.log("https://abc.com".startsWith("https"));
function isSecureUrlV1(url) {
  if (url === "") return "";

  return url.indexOf("https") === 0 || url.indexOf("wss") === 0;
}

console.log(isSecureUrlV1("https://vietcredit.com.vn"));

function isSecureUrlV2(url) {
  if (url === "") return "";

  if (url.startsWith("https") || url.startsWith("wss")) return true;
  return false;
}

/** extract Domain Email */
function extractDomainV1(email) {
  if (email === "") return "";
  //  Dùng split tách string thành array , sau đó lấy phần tử thứ 01 của array
  return email.split("@")[1];
}
console.log(extractDomainV1("beta@abc.com"));
console.log("abc@gmail.com".split("@")[1]);

function extractDomainV2(email) {
  if (email === "") return "";
  // Dùng indexOf lấy phần tử theo thứ tự, sau đó dùng slice() để lấy từ vị trí của indexOf đến kế cuối
  return email.slice(email.indexOf("@") + 1);
}
console.log(extractDomainV2("beta@abc.com"));
console.log("abc@gmail.com".slice("abc@gmail.com".indexOf("@") + 1));

/** find Code */
function findSecret(code) {
  if (code === code.toUpperCase()) return "";
  let result = "";
  for (let i = 0; i < code.length; i++) {
    if (code.charAt(i) !== code.charAt(i).toUpperCase()) {
      result += `${code.charAt(i)}`;
      // console.log(result);
    }
  }
  return result;
}
console.log(findSecret("SUPERasdfDEggnKO"));

const codes = "abcDEFghy";
console.log("SUPERasdf".split(/([A-Z])/));

console.log("abcDEFghy".split("abcDEFghy".toUpperCase() == "abcDEFghy"));

/** get Full Name */
function getFullName(firstName, lastName) {
  if (!firstName && lastName === "") return "No inputing!";

  let resultFirstName = "";
  if (firstName !== "") {
    const firstElementFirstName = firstName[0].toUpperCase();
    const secondElementFirstName = firstName.slice(1).toLowerCase();
    resultFirstName = `${firstElementFirstName}${secondElementFirstName}`
      .split(" ")
      .join("");
  }

  let resultLastName = "";
  if (lastName !== "") {
    const firstElementLastName = lastName[0].toUpperCase();
    const secondElementLastName = lastName.slice(1).toLowerCase();
    resultLastName = `${firstElementLastName}${secondElementLastName}`
      .split(" ")
      .join("");

    console.log(
      (result = { firstElementLastName, secondElementLastName, resultLastName })
    );
  }

  if (firstName === undefined || lastName === undefined) {
    return resultFirstName;
  }

  if (resultFirstName === "") {
    return resultLastName;
  } else if (resultLastName === "") {
    return resultFirstName;
  }
  return `${resultFirstName} ${resultLastName}`;
}

console.log(getFullName("ngHieM"));
// console.log(getFullName(firstName, lastName));

console.log(!--100);
