// Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
// Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
// Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
// phần domain nêu trên)

function isEmail(email) {
  if (email.length <= 0 || !email.includes("@")) return false;

  const domainArray = [".com.vn", ".com", ".vn"];

  const firstAs = email.indexOf("@");
  const firstDot = email.indexOf(".");

  /** X */
  const firstString = email.slice(0, firstAs); // Dùng slice lấy chuỗi từ vị trí 0 đến trước @
  /** Y */
  const secondString = email.slice(firstAs + 1, firstDot); // Dùng slice để lấy chuỗi từ sau @ đến '.'
  /** Domain */
  const domain = email.slice(firstDot);
  /** Check domain is valid */
  const isDomain = domainArray.some((x) => x === domain);

  if (firstString.length < 3 || secondString.length < 3 || !isDomain)
    return false;

  return true;
}

export function countEmails(str) {
  if (str.length <= 0) return 0;

  let count = 0;

  let newArray = str.split(" ");
  newArray.forEach((element) => {
    if (isEmail(element)) {
      count++;
    }
  });
  return count;
}

// console.log(countEmails("my email should be aaabc@super.com"));
