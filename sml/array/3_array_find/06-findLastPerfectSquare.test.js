import { findLastPrefectSquare } from "./06-findLastPerfectSquare";

describe("Name of the group", () => {
  test("should return undefined", () => {
    expect(findLastPrefectSquare([2, 3, 5])).toBe();
    expect(findLastPrefectSquare([4, 16, 25, 36, 40])).toEqual(36);
  });
});
