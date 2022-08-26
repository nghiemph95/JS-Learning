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

/** HTMLElement.dataset được sử dụng khi custom attribute với format là 'data-*'
 * Lưu ý: khi gõ trong HTML phải theo chuẩn kebab-case (chữ thường có gạch nối)
 * Lưu ý: khi gõ trong JS, sẽ convert theo chuẩn camelCase (learningJavascript)
 */
