// const productList = [
//   { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
//   { id: 2, name: "Iphone 16 Pro Max", isFreeShip: true, price: 1500000 },
// ];

/** Kiểm tra có sản phẩm nào nhỏ hơn giá cho trước và freeship không */

export function hasFreeShip(productList, price) {
  if (!Array.isArray(productList) || productList.length === 0) return false;
  if (price < 0) return false;

  function checkFreeShip(product) {
    if (!product) return false;

    return product.isFreeShip === true && price < product.price;
  }

  /**for i */
  for (let i = 0; i < productList.length; i++) {
    if (checkFreeShip(productList[i])) return true;
  }
  return false;

  /** forEach */
  let isFreeShip = false;
  productList.forEach((element) => {
    if (checkFreeShip(element)) isFreeShip = true;
  });
  return isFreeShip;

  /** find*/
  return Boolean(productList.find(checkFreeShip));

  /** findIndex */
  return productList.findIndex(checkFreeShip) > 0;
}

// console.log(hasFreeShip(productList, 1000000));
