import { findProductHavingFreeShip } from "./14-findProductHavingFreeShip";

describe("Name of the group", () => {
  const productList = [
    { id: 1, name: "IPhone 5", isFreeShip: false },
    { id: 2, name: "IPhone X", isFreeShip: true },
    { id: 3, name: "IPhone 12 Pro", isFreeShip: true },
  ];
  test("should ", () => {
    expect(findProductHavingFreeShip(productList)).toStrictEqual({
      id: 2,
      name: "IPhone X",
      isFreeShip: true,
    });
  });
});
