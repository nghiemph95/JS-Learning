import { chunkArray } from "./11-chunkArray";

describe("Name of the group", () => {
  test("should ", () => {
    expect(chunkArray([])).toStrictEqual([]);
  });

  test("should ", () => {
    expect(chunkArray({})).toStrictEqual([]);
  });

  test("should ", () => {
    expect(chunkArray([1, 2, 3], -1)).toStrictEqual([]);
  });

  test("should ", () => {
    expect(chunkArray([1, 2, 3], 0)).toStrictEqual([]);
  });

  test("should ", () => {
    expect(chunkArray([1, 2, 3], 2)).toStrictEqual([[1, 2], [3]]);
  });

  test("should ", () => {
    expect(chunkArray([1, 2, 3], 1)).toStrictEqual([[1], [2], [3]]);
  });
});
