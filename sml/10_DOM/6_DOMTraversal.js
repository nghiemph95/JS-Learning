/** Mục đích:
 * 1. Duyệt node, duyệt parent
 * 2. Phân biệt parentNode và parentElement
 */

/** Overview
 * 1. Node: có nhiều loại Text, Element, Comment...
 * 2. Element: html, svg element: div, p, section, h1,...
 * 3. Children
 */

document; // root node

document.documentElement; // html
document.body; // body
document.head; // head

/** Duyệt node */
Node.parentNode;
Node.childNodes;
Node.firstChild;
Node.lastChild;
Node.previousSibling;
Node.nextSibling;

/** Element ONLY */
Node.parentElement;
Element.children;
Element.firstElementChild;
Element.lastElementChild;
Element.previousElementSibling;
Element.nextElementSibling;

/** Example */
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>Easy Frontend</h1>
    <p>Learning DOM is so easy! :P</p>
    <script src="src/index.js"></script>
  </body>
</html>;

console.log(document.body.parentNode); // html
console.log(document.body.childNodes);
// [text, comment, text, h1, text, p, text, script, text] (9 items 🤣 )
console.log(document.body.firstChild); // text
console.log(document.body.lastChild); // text
console.log(document.body.previousSibling); // text
console.log(document.body.nextSibling); // null

/** Only elements traversal - Bộ element hữu dụng và đúng mong muốn hơn*/
console.log(document.body.parentElement); // html
console.log(document.body.children);
// [h1, p, script] (only 3 items 😎 )
console.log(document.body.firstElementChild); // h1
console.log(document.body.lastElementChild); // script
console.log(document.body.previousElementSibling); // head
console.log(document.body.nextElementSibling); // null

/** parentNode và parentElement khác nhau cái gì
 * parentNode: return về thằng cha, nó là cái gì thì return về cái đó
 * parentElement: return về th cha nếu nó là 1 element, nếu ko thì return null
 */
