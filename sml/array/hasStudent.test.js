import { hasStudent } from "./hasStudent";

describe("Test function hasStudent()", () => {
  const studentList = [
    { id: 1, name: "Easy" },
    { id: 2, name: "Frontend" },
  ];
  test("should return true", () => {
    expect(hasStudent(studentList, 1)).toBe(true);
    expect(hasStudent(studentList, 3)).toBe(false);
  });
});
