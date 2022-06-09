import { hasEvenNumberGreaterThanN } from "./hasEvenNumberGreaterThanN";

describe("Test hasEvenNumberGreaterThanN()", () => {
  test("should return false", () => {
    expect(hasEvenNumberGreaterThanN([2, 3, 4], 5)).toBe(false);
  });

  test("should return true", () => {
    expect(hasEvenNumberGreaterThanN([2, 3, 4, 6], 5)).toBe(true);
  });
});
