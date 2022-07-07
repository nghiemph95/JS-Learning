import { remove } from "./02-remove";

describe("Name of the group", () => {
  test("should ", () => {
    expect(remove([1, 2, 3], -1, 10)).toStrictEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 3, 10)).toStrictEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 1, 2)).toStrictEqual([1]);
    expect(remove([1, 2, 3], 0)).toStrictEqual([]);
  });
});
