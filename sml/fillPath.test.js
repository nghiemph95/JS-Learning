import { fillPath } from "./fillPath";

describe("Test fillPath function", () => {
  test("should return following these", () => {
    expect(
      fillPath(fillPath("/products/:productId", { productId: 123 })).toBe(
        "/products/123"
      )
    );
  });
  test("should return following these", () => {
    expect(
      fillPath(
        fillPath("/categories/:categoryId/products/:productId", {
          categoryId: 1,
          productId: 2,
        })
      ).toBe("/categories/1/products/2")
    );
  });
  test("should return following these", () => {
    expect(
      fillPath(
        fillPath(
          fillPath("/categories/:categoryId/products/:productId", {
            productId: 2,
          })
        ).toBe("/categories/:categoryId/products/2")
      )
    );
  });
});
