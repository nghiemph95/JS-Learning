import { generateFibonaci } from "./03-generateFibonaci";

describe("Name of the group", () => {
  it("should ", () => {
    expect(generateFibonaci(5)).toStrictEqual([0, 1, 1, 2, 3]);
    expect(generateFibonaci(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8]);
  });
});
