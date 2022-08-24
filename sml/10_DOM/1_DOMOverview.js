/** DOM: là cấu trúc dạng cây và là
 * 1 cái ánh xạ của file document, có thể là HTML hoặc XML */

/** Rendering Process
 * 1. File HTML sẽ build lên cây DOM (Document Object Model)
 * 2. File CSS sẽ build lên cây CSSOM
 * 3. Kết hợp 2 file này lại thành cây Render Tree -> Render lên màn hình
 */

/** DOM Construction
 * 1. Bytes : 3C 42 6F 63 .....
 * 2. Characters: <html><head>...</head><body></body>
 * 3. Tokens: StartTag: html, StartTag: head.....
 * 4. Nodes: html, head, meta, body, p, ...
 * 5. DOM: DOM Tree (html -> head -> meta,link,body -> p,div,span)
 */

/** Tại sao lại là cấu trúc cây: Bởi vì bên CSS sẽ có thuộc tính kế thừa
 * Ví dụ: thằng cha có font-size là 16px thì thằng con cũng được thừa hưởng
 */

/** DOM không chỉ có ở trình duyệt */
/** BOM (Browser Object Model) là những object mà chỉ có trên trình duyệt.
 * Ví dụ: navigator, screen, location, frames, history, XMLHttpResquest */
