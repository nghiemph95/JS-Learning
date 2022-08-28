/** Clone: nhân bản */

/** khi Clone nó sẽ copy tất cả thuộc tính, giá trị
 * kể cả inline listeners (inline listener: tất cả những thuộc tính bắt đầu = chữ "on")
 * nhưng nó sẽ ko copy eventListener/node.onClick/function*/

<h1 id="title" onClick="click">
  Easy Frontend
</h1>;
//Inline listener will be copied
const h1Element = document.getElementById("title");
if (h1Element) {
  // clone tất cả thuộc tính của node hiện tại
  const cloneH1 = h1Element.cloneNode(true);

  // thay đổi id nhằm tránh trùng với id hiện tại
  h1Element.id = "newTitle";

  cloneH1.click(); // kết quả : click-
}

// Tuy nhiên: hàm clone sẽ ko copy sự kiện addEventListener/.onClick
<h1 id="title">Easier</h1>;

const h1Element1 = document.getElementById("title");
if (h1Element1) {
  h1Element1.addEventListener("click", () => {
    console.log("title click");
  });

  const cloneH1X = h1Element1.cloneNode(true);
  cloneH1X.click(); // kết quả : undefined vì không thể clone được hàm evenListener
}
