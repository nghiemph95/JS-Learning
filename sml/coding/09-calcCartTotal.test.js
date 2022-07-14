import { calcCartTotal } from "./09-calcCartTotal";

describe("Name of the group", () => {
  const cartItemList = [
    { id: 1, product: { id: 1, price: 100000 }, quantity: 4 },
    { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
  ];
  test("should ", () => {
    expect(calcCartTotal([])).toBe(0);
  });

  test("should ", () => {
    expect(calcCartTotal(cartItemList)).toEqual(500000);
  });
});
