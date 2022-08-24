import { fillPath } from "./fillPath";

describe("Test fillPath function", () => {
  test("should test", () => {
    expect(fillPath("/products/:productId", { productId: 123 })).toBe(
      "/products/123"
    );
  });
});
