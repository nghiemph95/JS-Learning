import { countWords } from "./03-countWords";

describe("Name of the group", () => {
  test("should ", () => {
    expect(countWords(["easy", "frontend"], 4)).toBe(2);
    expect(countWords(["easy", "frontend"], 5)).toBe(1);
    expect(countWords(["easy", "frontend"], 10)).toBe(0);
  });
});
