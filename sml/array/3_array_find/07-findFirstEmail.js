/** Tìm email đầu tiên trong mảng */
function isEmailValidate(email) {
  if (email.length <= 0 || !email.includes("@")) return;

  const domainArray = [".com", ".vn", ".com.vn"];

  const firstAs = email.indexOf("@");
  const firstDot = email.indexOf(".");

  const firstString = email.slice(0, firstAs);
  console.log("firstString: ", firstString);
  const secondString = email.slice(firstAs + 1, firstDot);
  console.log("seconString: ", secondString);

  const domain = email.slice(firstDot);
  console.log("domain: ", domain);
  const isDomain = domainArray.some((e) => e === domain);

  if (firstString.length < 3 || secondString.length < 3 || !isDomain) {
    return false;
  }
  return email;
}

// console.log(isEmailValidate("abc@gmail.com"));

export function findFirstEmail(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return;

  return strList.find((e) => isEmailValidate(e));
}
// console.log(findFirstEmail(["abc@easy.frontend"]));
