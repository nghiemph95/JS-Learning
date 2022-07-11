import { findAllIncreasingSubArr } from "./01-findAllIncreasingSubArr";

describe("Name of the group", () => {
  test("should return the the subarray", () => {
    expect(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10])).toStrictEqual([
      [1, 2, 3],
      [-10, 5, 10],
    ]);
  });
});
