import { statisticsCharacters } from "./statisticsCharacters";

describe("test", () => {
  test("should ", () => {
    expect(statisticsCharacters("aa b cc ")).toEqual({
      a: 2,
      b: 1,
      c: 2,
      space: 3,
    });
  });
});
