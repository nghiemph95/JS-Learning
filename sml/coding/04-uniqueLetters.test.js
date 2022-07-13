import { uniqueLetters } from "./04-uniqueLetters";

describe("Name of the group", () => {
  test("should ", () => {
    expect(uniqueLetters("")).toBe("");
    expect(uniqueLetters("abc")).toBe("abc");
    expect(uniqueLetters("easy frontend")).toBe("asy frotd");
  });
});
