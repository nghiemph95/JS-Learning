import { uniqueArray } from "./06-uniqueArray";

describe("Name of the group", () => {
  test("should ", () => {
    expect(uniqueArray([1, 1, 2, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(uniqueArray([1, 1, 1, 1])).toStrictEqual([1]);
  });
});
