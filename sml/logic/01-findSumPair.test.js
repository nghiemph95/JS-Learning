import { findSumPair } from "./01-findSumPair";

describe("Name of the group", () => {
  test("should ", () => {
    expect(findSumPair([])).toBe([]);
    expect(findSumPair([], 10)).toBe([]);
    expect(findSumPair([1, 2], 2)).toBe([]);
    expect(findSumPair([1, 2, 3], 5)).toBe([2, 3]);
  });
});
