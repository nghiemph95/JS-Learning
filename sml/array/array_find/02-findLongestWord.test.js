import { findLongestWord } from "./02-indLongestWord";

describe("Name of the group", () => {
  it("should return like that", () => {
    expect(findLongestWord([])).toBe("");
    expect(findLongestWord(["super", "cool"])).toBe("super");
    expect(findLongestWord(["super", "super cool"])).toBe("super");
  });
});
