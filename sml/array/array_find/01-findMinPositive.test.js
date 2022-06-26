import { findMinPositive } from "./01-findMinPositive";

describe("Name of the group", () => {
  test("should return undefine", () => {
    expect(findMinPositive([])).toBe();
    expect(findMinPositive([-1, -5])).toBe();
  });

  test("should return undefine", () => {
    expect(findMinPositive([-1, -5, 2, 6])).toEqual(2);
  });
});
