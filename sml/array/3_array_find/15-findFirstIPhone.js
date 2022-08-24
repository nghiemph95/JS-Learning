export function findFirstIPhone(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return;

  return productList.find((e) => e.name.toLowerCase().slice(0, 6) === "iphone");
}
