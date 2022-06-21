import { hasAlice } from "./hasAlice";

describe("Test func", () => {
  const studentList = [
    { id: 1, name: "Alice", gender: "male" },
    { id: 2, name: "aliCE", gender: "female" },
    { id: 3, name: "Easy Frontend", gender: "male" },
  ];
  test("should return true", () => {
    expect(hasAlice(studentList)).toBe(true);
  });
});
