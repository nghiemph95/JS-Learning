import { isSubArray } from "./03-isSubArray";

describe("Name of the group", () => {
  test("should ", () => {
    expect(isSubArray([], [1])).toBe(true);
    expect(isSubArray([1], [1, 2])).toBe(true);
    expect(isSubArray([1, 2], [2, 3, 4])).toBe(false);
    expect(isSubArray([1, 2], [4, 10, 1, 2, 3])).toBe(true);
  });
});
