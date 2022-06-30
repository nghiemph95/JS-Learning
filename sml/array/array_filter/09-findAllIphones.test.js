import { findAllIphones } from "./09-findAllIphones";

describe("Name of the group", () => {
  const productList = [
    { id: 1, name: "Luxury IPhone X", amount: 1 },
    { id: 2, name: "Super Cool iphone 16 Pro", amount: 0 },
    { id: 3, name: "iphone 20 Pro", amount: 2 },
  ];
  test("should ", () => {
    expect(findAllIphones(productList)).toStrictEqual([
      { id: 1, name: "Luxury IPhone X", amount: 1 },
      { id: 3, name: "iphone 20 Pro", amount: 2 },
    ]);
  });
});
