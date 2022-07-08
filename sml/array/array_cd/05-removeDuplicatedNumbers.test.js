import { removeDuplicatedNumbers } from "./05-removeDuplicatedNumbers";

describe("Name of the group", () => {
  test("should ", () => {
    expect(removeDuplicatedNumbers([1, 1, 2, 3, 2])).toStrictEqual([3]);
    expect(removeDuplicatedNumbers([1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(removeDuplicatedNumbers([])).toStrictEqual([]);
  });
});
