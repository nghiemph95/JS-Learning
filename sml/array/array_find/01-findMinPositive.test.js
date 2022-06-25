import { findMinPositive } from "./01-findMinPositive";

describe("Name of the group", () => {
  test("should return undefine", () => {
    expect(findMinPositive([])).toBe(undefined);
    // expect(findMinPositive([-1, -5])).toBe(undefined);
  });

  test("should return undefine", () => {
    expect(findMinPositive([-1, -5, 2, 6])).toBe(2);
  });
});
