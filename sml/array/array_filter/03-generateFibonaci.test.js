import { generateFibonaci } from "./03-generateFibonaci";

describe("Name of the group", () => {
  test("should ", () => {
    expect(generateFibonaci(5)).toBe([0, 1, 1, 2, 3]);
    expect(generateFibonaci(10)).toBe([0, 1, 1, 2, 3, 5, 8]);
  });
});
