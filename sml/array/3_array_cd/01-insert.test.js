import { insert } from "./01-insert";

describe("Name of the group", () => {
  test("should ", () => {
    expect(insert([1, 2, 3], 0, -1)).toStrictEqual([0, 1, 2, 3]);
    expect(insert([1, 2, 3], 4, 10)).toStrictEqual([1, 2, 3, 4]);
    expect(insert([1, 2, 3], 10, 2)).toStrictEqual([1, 2, 10, 3]);
  });
});

