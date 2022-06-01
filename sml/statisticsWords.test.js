import { statisticsWords } from "./statisticsWords";

describe("Test statisticsWords()", () => {
  it("should return empty object in case str is empty  ", () => {
    expect(statisticsWords("")).toEqual({});
  });
  test("Test return number", () => {
    expect(statisticsWords("easy frontend is very easy")).toBe({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1,
    });
  });
});
