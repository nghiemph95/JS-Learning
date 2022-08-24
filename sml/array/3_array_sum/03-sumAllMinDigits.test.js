import { sumAllMinDigits } from "./03-sumAllMinDigits";

describe("Name of the group", () => {
  test("should ", () => {
    expect(sumAllMinDigits([])).toBe(0);
    expect(sumAllMinDigits([123])).toBe(1);
    expect(sumAllMinDigits([123, 532])).toBe(3);
  });
});
