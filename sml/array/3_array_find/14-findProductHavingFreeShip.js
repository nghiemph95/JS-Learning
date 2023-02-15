/** Tìm sản phẩm đầu tiên có freeship */
export function findProductHavingFreeShip(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return;

  return productList.find((e) => e.isFreeShip === true);
}
