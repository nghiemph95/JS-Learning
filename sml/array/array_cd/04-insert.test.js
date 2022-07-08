import { insert } from "./04-insert";

describe("Name of the group", () => {
  test("should return only 1 element", () => {
    expect(insert([], 3)).toStrictEqual([3]);
  });
  test("should return only 1 element", () => {
    expect(insert([1, 2, 4], 3)).toStrictEqual([1, 2, 3, 4]);
    expect(insert([1, 2, 3], 3)).toStrictEqual([1, 2, 3, 3]);
  });
});
