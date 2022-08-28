/** Mục đích:
 * 1. Update element.attribute (interface element)
 * 2. HTMLElement.dataset
 * 3. Element.classList
 * 4. HTMLElement.style
 */

/** Element.attribute (thuộc tính phần tử)
 *
 * 1. Common attribute
 *  Element.id
 *  Element.className (lấy chuỗi class)
 *  HTMLElement.hidden (show hide 1 phần tử)
 *  HTMLElement.title (hover show popup)
 *
 * 2. Specific attribute
 *  HTMLAnchorElement<a>: href, rel, target,... (thẻ a)
 *  HTMLImageElement<img>: src, alt, ... (thẻ img)
 */
$0.id; //title
$0.id = "newTitle"; //cập nhật lại id thành newTitle
$0.className; //update thuộc tính class='hello hero'
$0.href; // undefined

/** ngoài ra có thể customer attribute
 * nhớ là đối với attribute có tính chất live tức là khi thay đổi trên trình duyệt nó cũng thay đổi theo
 * element.attribute()
 */
/**--------------------------------------------------------------------------------------------------- */
/** HTMLElement.dataset được sử dụng khi custom attribute với format là 'data-*'
 * Lưu ý: khi gõ trong HTML phải theo chuẩn kebab-case (chữ thường có gạch nối)
 * Lưu ý: khi gõ trong JS, sẽ convert theo chuẩn camelCase (learningJavascript)
 */

<nav id="topnav" data-test="easy" data-learning-javascript="false"></nav>;

const nav = document.getElementById("topnav");
if (nav) {
  //get data attributes
  nav.dataset.test; //easy
  nav.dataset.learningJavascript; // false

  // set data attribute (it will convert to string)
  nav.dataset.test = "hard";
  nav.dataset.learningJavascript = true;
}

/** ------------------------------------------------------------------------------------------------- */
/** Element.classList: là 1 cái object giúp tương tác vs class của mình */
function handleToggleClick() {
  const accordion = document.getElementById("accordion");
  if (!accordion) return;

  accordion.classList.toggle("active"); // add toggle vào class
}

/** ------------------------------------------------------------------------------------------------ */
/** HTMLElement.style */
const title = document.getElementById("title");
if (title) {
  //set style
  title.style.color = "red";
  title.style.fontSize = "24px";
  title.style.fontWeight = "bold";

  // get style
  const computedStyle = getComputedStyle(title);
  computedStyle.color; // rgb(255, 0, 0)
}
