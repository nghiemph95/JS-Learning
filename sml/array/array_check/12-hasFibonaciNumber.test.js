import { hasFibonaciNumber } from "./hasFibonaciNumber";

describe("Name of the group", () => {
  test("should return false", () => {
    expect(hasFibonaciNumber([4, 6, 7])).toBe(false);
  });
  test("should return true", () => {
    expect(hasFibonaciNumber([0, 1, 2, 3])).toBe(true);
    expect(hasFibonaciNumber([89])).toBe(true);
  });
});
