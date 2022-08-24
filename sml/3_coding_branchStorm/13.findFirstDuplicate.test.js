import { findFirstDuplicate } from "./13-findFirstDuplicate";

describe("Name of the group", () => {
  test("should ", () => {
    expect(findFirstDuplicate([])).toBe(-1);
    expect(findFirstDuplicate({})).toBe(-1);
    expect(findFirstDuplicate([1, 2, 3])).toBe(-1);
    expect(findFirstDuplicate([1, 1, 3])).toBe(1);
    expect(findFirstDuplicate([1, 2, 2, 1])).toBe(2);
  });
});
