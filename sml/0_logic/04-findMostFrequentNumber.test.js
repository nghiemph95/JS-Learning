import { findMostFrequentNumber } from "./04-findMostFrequentNumber";

describe("Name of the group", () => {
  test("should ", () => {
    expect(findMostFrequentNumber([1])).toBe(1);
    expect(findMostFrequentNumber([1, 2, 3, 2])).toBe(2);
    expect(findMostFrequentNumber([1, 2, 3, 2, 3, 4])).toBe(2);
  });
});
