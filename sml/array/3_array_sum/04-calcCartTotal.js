/** Tổng tiền của giỏ hàng */
export function calcCartTotalV1(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return;

  let sum = 0;
  for (let i = 0; i < cartItemList.length; i++) {
    const priceItem = cartItemList[i].product.price * cartItemList[i].quantity;
    sum += priceItem;
  }
  return sum;
}

export function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return;

  return cartItemList.reduce((pre, cur) => {
    const priceItem = cur.product.price * cur.quantity;
    return pre + priceItem;
  }, 0);
}
