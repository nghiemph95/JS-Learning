import { hasStudent } from "./hasStudent";

describe("Test function hasStudent()", () => {
  test("should return true", () => {
    expect(hasStudent(studentList, 1)).toBe(true);
    expect(hasStudent(studentList, 3)).toBe(false);
  });
});
