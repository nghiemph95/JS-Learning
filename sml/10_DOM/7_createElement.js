/** Create element */
<div id="app"></div>;

const app = document.getElementById("app");
if (app) {
  // 1. Create element
  const h1 = document.createElement("h1");

  // 2. Set attributes for new element
  h1.textContent = "Easy Frontend";

  // 3. Add it to DOM tree
  app.appendChild(h1); // thêm vào sau cùng của thẻ h1
}
