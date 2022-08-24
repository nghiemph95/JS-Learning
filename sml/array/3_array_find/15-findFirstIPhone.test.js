import { findFirstIPhone } from "./15-findFirstIPhone";

describe("Name of the group", () => {
  const productList = [
    { id: 1, name: "Samsung" },
    { id: 2, name: "IPHONE X" },
    { id: 3, name: "iPhone 12 Pro" },
  ];
  test("should ", () => {
    expect(findFirstIPhone(productList)).toStrictEqual({
      id: 2,
      name: "IPHONE X",
    });
  });
});
