export function filterProducts(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  let result = [];
  productList.filter((_, i) => {
    if (productList[i].price > 100000) {
      result.push(productList[i]);
    }
  });
  return result;
}
