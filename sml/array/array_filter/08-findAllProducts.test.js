import { findAllProducts } from "./08-findAllProducts";

describe("Name of the group", () => {
  const productList = [
    { id: 1, name: "iphone X", isFreeShip: true },
    { id: 2, name: "iphone 16 Pro", isFreeShip: true },
    { id: 3, name: "iphone 20 Pro", isFreeShip: false },
  ];
  test("should ", () => {
    expect(findAllProducts(productList)).toStrictEqual([
      { id: 1, name: "iphone X", isFreeShip: true },
      { id: 2, name: "iphone 16 Pro", isFreeShip: true },
    ]);
  });
});
