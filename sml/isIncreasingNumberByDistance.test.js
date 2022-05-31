import { isIncreasingNumberByDistance } from "./isIncreasingNumberByDistance";

describe("Test isIncreasingNumberByDistance()", () => {
  test("return false", () => {
    expect(isIncreasingNumberByDistance(11, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(135, 1)).toBe(false);
  });

  test("return true", () => {
    expect(isIncreasingNumberByDistance(123, 1)).toBe(true);
    expect(isIncreasingNumberByDistance(135, 2)).toBe(true);
  });
});
