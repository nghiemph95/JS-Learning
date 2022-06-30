import { generateNumberInRange } from "./01-generateNumberInRange";

describe("Name of the group", () => {
  test("return the array base range", () => {
    expect(generateNumberInRange(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(generateNumberInRange(5, 7)).toStrictEqual([5, 6, 7]);
  });
});
