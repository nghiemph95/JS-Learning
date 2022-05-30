import { isIncreasingNumber } from "./isIncreasingNumber";

describe("test function isIncreasingNumber", () => {
  test("should return fasle when number < 0 > 10000000", () => {
    expect(isIncreasingNumber(-1)).toBe(false);
    expect(isIncreasingNumber(-2)).toBe(false);
    expect(isIncreasingNumber(5000000)).toBe(false);
    expect(isIncreasingNumber(9000000)).toBe(false);
  });
  test("should return fasle when number have 1 digit", () => {
    Array.from({ length: 10 }, (x, i) => i + 1).forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    });
  });
  test("should return false when number have 2 digit same", () => {
    expect(isIncreasingNumber(11)).toBe(false);
    expect(isIncreasingNumber(22)).toBe(false);
    expect(isIncreasingNumber(55)).toBe(false);
    expect(isIncreasingNumber(99)).toBe(false);
  });

  test("should return true when number have 2 more", () => {
    expect(isIncreasingNumber(112)).toBe(true);
    expect(isIncreasingNumber(2234567)).toBe(true);
    expect(isIncreasingNumber(56789)).toBe(true);
    expect(isIncreasingNumber(167)).toBe(true);
  });

  test("should return false when number have 2 reduce", () => {
    expect(isIncreasingNumber(132)).toBe(false);
    expect(isIncreasingNumber(2239567)).toBe(false);
    expect(isIncreasingNumber(56989)).toBe(false);
    expect(isIncreasingNumber(1867)).toBe(false);
  });
});
