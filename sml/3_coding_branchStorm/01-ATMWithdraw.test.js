import { withdraw } from "./01-ATMWithdraw";

describe("Name of the group", () => {
  test("should ", () => {
    expect(withdraw(850000)).toStrictEqual({
      k500: 1,
      k200: 1,
      k100: 1,
      k50: 1,
    });
    expect(withdraw(200000)).toStrictEqual({
      k500: 0,
      k200: 1,
      k100: 0,
      k50: 0,
    });
    expect(withdraw(125000)).toStrictEqual("Invalid balance");
    expect(withdraw(90000000)).toStrictEqual("Insufficient balance from ATMM");
  });
});
