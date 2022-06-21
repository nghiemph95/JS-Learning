import { countWords } from "./countWords";

describe("test countWords()", () => {
  test("should return a number of word in str", () => {
    expect(countWords("")).toBe(0);
  });
  test("should return a number ", () => {
    expect(countWords("easy frontend is very easy")).toBe(5);
  });
});
