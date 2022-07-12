import { findSumPair } from "./01-findSumPair";

describe("Name of the group", () => {
  test("should ", () => {
    expect(findSumPair([])).toStrictEqual([]);
    expect(findSumPair([], 10)).toStrictEqual([]);
    expect(findSumPair([1, 2], 2)).toStrictEqual([]);
    expect(findSumPair([1, 2, 3], 5)).toStrictEqual([2, 3]);
  });
});
