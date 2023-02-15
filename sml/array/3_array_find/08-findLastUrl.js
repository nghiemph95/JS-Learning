/** Tìm URL cuối cùng trong mảng */
function isUrl(url) {
  if (url.length <= 0 || !url.includes("://")) return;

  const protocolArray = ["http", "https", "ws", "wss"];
  const domainArray = [".com", ".com.vn", ".vn"];

  const firstChar = url.indexOf("://");
  const firstDot = url.indexOf(".");

  const protocolString = url.slice(0, firstChar);

  const domainName = url.slice(firstChar + 3, firstDot);

  const domainString = url.slice(firstDot + 1);

  let last;
  if (domainString.indexOf(".") > 0) {
    last = domainString.slice(domainString.indexOf("."));
  }

  const isProtocol = protocolArray.some((x) => x === protocolString);
  const isDomain = domainArray.some((y) => y === (last ? last : domainString));

  if (domainName.length < 3 || !isDomain || !isProtocol) return;
  return url;
}

export function findLastUrl(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return;

  return strList.reverse().find((e) => isUrl(e));
}

// console.log(findLastUrl(["https://google.com", "wss://chat.sample.com"]));
