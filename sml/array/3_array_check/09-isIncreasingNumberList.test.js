import { isIncreasingNumberList } from "./09-isIncreasingNumberList";

describe("Name of the group", () => {
  test("should return true", () => {
    expect(isIncreasingNumberList([1, 2])).toBe(true);
  });
  test("should return true", () => {
    expect(isIncreasingNumberList([1, 1])).toBe(false);
    expect(isIncreasingNumberList([2, 1])).toBe(false);
  });
});
