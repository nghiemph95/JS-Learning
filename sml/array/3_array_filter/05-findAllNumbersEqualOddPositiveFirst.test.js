import { findAllNumbers } from "./05-findAllNumbersEqualOddPositiveFirst";

describe("Name of the group", () => {
  test("should return [ ] ", () => {
    expect(findAllNumbers([1, 3, 5])).toStrictEqual([]);
    expect(findAllNumbers([1, 2, 5])).toStrictEqual([]);
  });

  test("should return [ 1,4,5, -6, 4, 5, 4] ", () => {
    expect(findAllNumbers([1, 4, 5, -6, 4, 5, 4])).toStrictEqual([4, 4]);
  });
});
