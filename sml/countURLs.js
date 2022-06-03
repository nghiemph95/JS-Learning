// URL có định dạng: protocol://domain.com/path-name
// URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
// Domain có thể là .com, .com.vn hoặc .vn
// Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ

function isURLs(url) {
  if (url.length < 0 || !url.includes("://")) return false;

  const protocolArray = ["http", "https", "ws", "wss"];
  const domainArray = [".com", ".com.vn", ".vn"];

  const firstChar = url.indexOf("://");
  const secondDot = url.indexOf(".");

  const firstString = url.slice(0, firstChar);
  console.log("firstString:", firstString);

  const secondString = url.slice(firstChar + 3, secondDot);
  console.log("secondString:", secondString);

  const thirdString = url.slice(secondDot);
  console.log("thirdString:", thirdString);

  const isProtocol = protocolArray.some((x) => x === firstString);
  const isDomain = domainArray.some((x) => x === thirdString);

  if (secondString.length < 3 || !isDomain || !isProtocol) return false;
  return true;
}

export function countURLs(str) {
  if (str.length < 0) return 0;

  let count = 0;

  let newArray = str.split(" ");
  newArray.forEach((element) => {
    if (isURLs(element)) count++;
  });
  return count;
}

// console.log(countURLs("my website is: https://ez.com you can visit it"));
