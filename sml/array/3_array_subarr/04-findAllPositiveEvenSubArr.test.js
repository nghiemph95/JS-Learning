import { findAllPositiveEvenSubArr } from "./04-findAllPositiveEvenSubArr";

describe("Name of the group", () => {
  test("should ", () => {
    expect(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20])).toStrictEqual([
      [2, 4],
      [10, 20],
    ]);
  });
});
