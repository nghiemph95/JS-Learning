import { countStudents } from "./08-countStudents";

describe("Name of the group", () => {
  studentListV1 = [
    {
      id: 1,
      gender: "female",
    },
    {
      id: 2,
      gender: "female",
    },
  ];

  studentList = [
    {
      id: 1,
      gender: "male",
    },
    {
      id: 2,
      gender: "female",
    },
  ];
  // test("should ", () => {
  //   expect(countStudents(studentListV1)).toBe(0);
  // });
  test("should ", () => {
    expect(countStudents(studentList)).toBe(1);
  });
});
