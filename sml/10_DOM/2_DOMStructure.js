/** Mục đich:
 * 1. Tìm hiểu eventTarget
 * 2. Tìm hiểu về Node
 */

/** để truy cập đến node gốc trong cây DOM ta dùng document */
document;
window.document;
global.document;

// muốn lấy thẻ html ta dùng:
document.documentElement;

// ngoài ra có thể lấy thẻ head, body
document.head;
document.body;

/** Node data type
 * 1. EventTarget: root of the page, cung cấp hàm addEventListener và removeEventListener
 * 2. Node: có nhiều loại node (text, element, comment...)
 * 3. Element: có nhiều loại element (HTMLElement, SVGElement...)
 * 4. HTMLElement: có nhiều thẻ gồm (HTMLInputElement, HTMLBodyElement, HTMLAnchorElement...)
 */

/** Tìm hiểu về Node
 * Có rất nhiều ví dụ node.childNodes, node.firstChild, node.lastChild...
 * Cung cấp các method, tiêu biểu là: Node.appendChild(childNode) và Node.cloneNode(deep)
 * => tất cả các thẻ bên dưới node đều sẽ có những thuộc tính kế thừa từ node
 */

/** Node type
 * 1. node.element_node (ELement node like <p> or <div>)
 * 2. node.text_node (text)
 * 3. node.comment_node (<!-- ... -->)
 * 4. node.document_node (document note)
 * ... còn rất nhiều
 */
