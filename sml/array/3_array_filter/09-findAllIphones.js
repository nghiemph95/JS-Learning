/** Tìm tất cả sản phẩm iphone có hàng tồn kho */
export function findAllIphones(productList) {
  return productList.filter(
    (element) =>
      element.name.toLowerCase().indexOf("iphone") > -1 && element.amount > 0
  );
}
// const productList = [
//   { id: 1, name: "Luxury IPhone X", amount: 1 },
//   { id: 2, name: "Super Cool iphone 16 Pro", amount: 0 },
//   { id: 3, name: "iphone 20 Pro", amount: 2 },
// ];

// console.log(findAllIphones(productList));
// console.log("Luxury IPhone X".toLowerCase().indexOf("iphone"));
