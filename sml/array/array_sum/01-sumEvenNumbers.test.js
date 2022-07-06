import { sumEvenNumbers } from "./01-sumEvenNumbers";

describe("Name of the group", () => {
  test("should ", () => {
    expect(sumEvenNumbers([-10, -4, 2, 8, 5])).toBe(6);
    expect(sumEvenNumbers([2, 8, 5, 4])).toBe(10);
  });
});
