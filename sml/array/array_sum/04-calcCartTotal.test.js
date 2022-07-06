import { calcCartTotal } from "./04-calcCartTotal";

describe("Name of the group", () => {
  const cartItemList = [
    { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
    { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
  ];
  test("should ", () => {
    expect(calcCartTotal(cartItemList)).toBe(250000);
  });
});
