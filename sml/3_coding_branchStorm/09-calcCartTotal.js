export function calcCartTotalV1(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;
  let sum = 0;
  cartItemList.forEach((element) => {
    const total = element.product.price * element.quantity;
    sum += total;
  });
  return sum;
}

export function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

  return cartItemList.reduce((sum, cur) => {
    const total = cur.product.price * cur.quantity;
    return sum + total;
  }, 0);
}
