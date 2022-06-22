import { hasFreeShip } from "./hasFreeShip";

describe("Name of the group testing", () => {
  const productList = [
    { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
    { id: 2, name: "Iphone 16 Pro Max", isFreeShip: true, price: 1500000 },
  ];
  test("should return true", () => {
    expect(hasFreeShip(productList, 10000000)).toBe(true);
  });
});
