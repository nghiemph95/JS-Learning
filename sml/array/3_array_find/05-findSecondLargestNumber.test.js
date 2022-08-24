import { findSecondLargestNumber } from "./05-findSecondLargestNumber";

describe("Name of the group", () => {
  test("should return undefined", () => {
    expect(findSecondLargestNumber([1])).toBe(undefined);
  });
  test("should return undefined", () => {
    expect(findSecondLargestNumber([1, 2])).toEqual(1);
    expect(findSecondLargestNumber([1, 2, 3, 4])).toEqual(3);
  });
});
