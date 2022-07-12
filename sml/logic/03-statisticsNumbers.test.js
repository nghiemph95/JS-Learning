import { statisticsNumbers } from "./03-statisticsNumbers";

describe("Name of the group", () => {
  test("should ", () => {
    expect(statisticsNumbers([1, 1, 1, 2, 2, 3])).toStrictEqual({
      1: 3,
      2: 2,
      3: 1,
    });
  });
});
