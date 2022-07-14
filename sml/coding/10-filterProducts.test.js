import { filterProducts } from "./10-filterProducts";

describe("Name of the group", () => {
  const productList = [
    { id: 1, price: 100000 },
    { id: 2, price: 150000 },
    { id: 3, price: 270000 },
  ];
  test("should ", () => {
    expect(filterProducts(productList)).toStrictEqual([
      { id: 2, price: 150000 },
      { id: 3, price: 270000 },
    ]);
  });
});
