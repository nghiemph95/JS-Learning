import { countStudents } from "./08-countStudents";

describe("Name of the group", () => {
  const studentList = [
    {
      id: 1,
      gender: "male",
    },
    {
      id: 2,
      gender: "female",
    },
  ];

  test("should ", () => {
    expect(countStudents(studentList)).toEqual(1);
  });
});
