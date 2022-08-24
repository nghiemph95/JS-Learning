/** URI - Uniform resouce Identifier:
 * Là tập hợp của URN và URL,
 * đơn giản nó là 1 cái string, chỉ định về
 * vị trí của 1 cái tài nguyên/resource nào đó
 */

/** URN: đơn giản là 1 cái tên */

/** URL: tên chính xác về đường dẫn
 * http/https: scheme
 * www.example.com: domain name
 * :80: port
 * /path/to/myfile.html: Path to the file
 * ?key1=value1&key2=value2: Parameters
 * #SomewhereInTheDocument: Anchor
 */

/** Create URl */
const url = new URL("https://ezfrontend.com/blog?page=1&limit=10#title");
console.log(url);

/** URLSearchParam: chính là object từ cái string url.search */
const params = new URLSearchParams("?page=1&limit=10");

params.get("_page"); //1
params.get("_limit"); //10
params.get("_order"); //null

params.set("_page", 2);
params.toString(); //_page=2&_limit=10

params.append("_page", 3);
params.toString(); //_page=2&_limit=10&_page=3

params.has("_page"); //true
params.get("_order"); //false

/** Khi dùng window.href nó sẽ lấy full giá trị url của mình */
window.location.href;

/** Khi dùng replace để trỏ tới trang URL mới nhưng không tể back về trang trước đó mà
 * chỉ back về trang trước đó nữa
 */
window.location.replace("https:...");

/** Dùng khi muốn duy chuyển qua thằng URL mới */
window.location.assign("https://ezfrontend.com");
