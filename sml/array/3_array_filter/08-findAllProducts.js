/** Tìm tất cả sản phẩm có hỗ trợ freeship */
export function findAllProducts(productList) {
  return productList.filter((element) => element.isFreeShip === true);
}
