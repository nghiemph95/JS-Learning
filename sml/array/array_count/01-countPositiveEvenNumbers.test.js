import { countPositiveEvenNumbers } from "./01-countPositiveEvenNumbers";

describe("Name of the group", () => {
  test("should ", () => {
    expect(countPositiveEvenNumbers([-2, -1])).toBe(0);
    expect(countPositiveEvenNumbers([-2, -1, 1, 2, 4])).toBe(2);
  });
});
