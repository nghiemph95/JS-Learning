import { findProductByCode } from "./10-findProductByCode";

describe("Name of the group", () => {
  const productList = [
    { id: 1, code: "ip01", name: "IPhone 16" },
    { id: 2, code: "ip02", name: "IPhone 16 Promax" },
  ];
  it("should return res", () => {
    expect(findProductByCode(productList, "ip01")).toEqual(0);
    expect(findProductByCode(productList, "ip03")).toEqual(-1);
  });
});
