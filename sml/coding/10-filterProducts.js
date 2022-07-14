export function filterProducts(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  let result = [];
  productList.forEach((element) => {
    if (element.price > 100000) {
      result[element];
    }
  });
  return result;
}
