import { hasTwoDigitsWithSum } from "./hasTwoDigitsWithSum";

describe("test hasTwoDigitsWithSum", () => {
  test("should return true", () => {
    expect(hasTwoDigitsWithSum(10, 1)).toBe(true);
    expect(hasTwoDigitsWithSum(11, 2)).toBe(true);
  });
  test("should return true", () => {
    expect(hasTwoDigitsWithSum(101, 3)).toBe(false);
    expect(hasTwoDigitsWithSum(109, 2)).toBe(false);
  });
});
