import { isSymmetricList } from "./11-isSymmetricList";

describe("Name of the group", () => {
  test("should return false", () => {
    expect(isSymmetricList([])).toBe(false);
    expect(isSymmetricList([1, 2, 3])).toBe(false);
  });
  test("should return false", () => {
    expect(isSymmetricList([1])).toBe(true);
    expect(isSymmetricList([1, 2, 2, 1])).toBe(true);
  });
});
