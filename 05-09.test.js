import { checkStudentV3 } from "./05-09-main";

describe("checkStudentV3()", () => {
  test("should return Invalid mark! when n < 0", () => {
    const value = checkStudentV3(-1);
    expect(value).toBe("Invalid");
  });

  test("should return Invalid mark! when n > 10", () => {
    const value = checkStudentV3(11);
    expect(value).toBe("Invalid");
  });

  test("should return Invalid mark! when n > 8", () => {
    expect(checkStudentV3(9)).toBe("Excellence");
    expect(checkStudentV3(10)).toBe("Excellence");
  });

  test("should return Invalid mark! when n in [7-8]", () => {
    expect(checkStudentV3(7)).toBe("Good");
    expect(checkStudentV3(8)).toBe("Good");
  });

  test("should return Invalid mark! when n in [4-6]", () => {
    [4, 5, 6].forEach((n) => {
      expect(checkStudentV3(n)).toBe("Not good");
    });
  });

  test("should return Invalid mark! when n in [1-3]", () => {
    [1, 2, 3].forEach((n) => {
      expect(checkStudentV3(n)).toBe("Bad");
    });
  });
});
