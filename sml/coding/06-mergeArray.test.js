import { mergeArray } from "./06-mergeArray";

describe("Name of the group", () => {
  test("should ", () => {
    expect(mergeArray(1, true)).toStrictEqual([]);
  });
  test("should ", () => {
    expect(mergeArray([], [])).toStrictEqual([]);
  });
  test("should ", () => {
    expect(mergeArray([], [1, 2, 3])).toStrictEqual([1, 2, 3]);
  });
  test("should ", () => {
    expect(mergeArray([1, 2, 3], [2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
});
