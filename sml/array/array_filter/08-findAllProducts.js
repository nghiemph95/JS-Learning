export function findAllProducts(productList) {
  return productList.filter((element) => element.isFreeShip === true);
}
