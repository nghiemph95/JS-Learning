import { findNumbers } from "./02-findNumbers";

describe("Name of the group", () => {
  it("should rerturn the array ", () => {
    expect(findNumbers([1])).toEqual([]);
    expect(findNumbers([2, 5, 3, 7])).toEqual([5, 7]);
  });
});
