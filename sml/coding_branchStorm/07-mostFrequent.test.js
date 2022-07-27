import { mostFrequent } from "./07-mostFrequent";

describe("Name of the group", () => {
  test("should ", () => {
    expect(mostFrequent(true)).toBe(undefined);
  });
  test("should ", () => {
    expect(mostFrequent()).toBe(undefined);
  });
  test("should ", () => {
    expect(mostFrequent([])).toBe(undefined);
  });
  test("should ", () => {
    expect(mostFrequent([1, 2, 3])).toBe(1);
  });
  test("should ", () => {
    expect(mostFrequent([2, 1, 3])).toBe(2);
  });
  test("should ", () => {
    expect(mostFrequent([2, 2, 3, 3, 2, 3, 3])).toBe(3);
  });
});
