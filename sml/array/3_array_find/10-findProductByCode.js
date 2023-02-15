/** Tìm vị trí của sản phẩm có mã code là =abc */
export function findProductByCode(productList, code) {
  if (!Array.isArray(productList) || productList.length === 0) return -1;

  return productList.findIndex((element) => element.code === code);
}
