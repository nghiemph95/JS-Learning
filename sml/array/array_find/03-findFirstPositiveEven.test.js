import { findFirstPositiveEven } from "./03-findFirstPositiveEven";

describe("Name of the group", () => {
  test("should return number or undefined", () => {
    expect(findFirstPositiveEven([1, 4, 5])).toEqual(4);
    expect(findFirstPositiveEven([1, 3, 5])).toEqual();
  });
});
