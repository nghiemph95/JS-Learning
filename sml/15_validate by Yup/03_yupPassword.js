import * as yup from "yup";

(async () => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("please enter title")
      .test(
        "at-least-two-words",
        "Please enter at least two words",
        (value) => {
          return (
            value.split(" ").filter((x) => !!x && x.length >= 3).length > 2
          );
        }
      )
      .test("should-not-spam", 'Please not use "spam" in title', (value) => {
        return !value.includes("spam");
      }),
    age: yup.number().required("please enter age").min(10, "mis is ten"),
    email: yup.string().required().email("please enter a valide email"),
    password: yup
      .string()
      .required("Please enter password")
      .min(6, "password should have at least 6 character"),
    retypePassword: yup
      .string()
      .required("Please enter retype password")
      .oneOf([yup.ref("password")], "password not match"),
  });

  try {
    await schema.validate(
      {
        title: "easy",
        age: 10,
        email: "abc@abc.com",
        password: "123123",
        retypePassword: "123123", // data is valid nếu retype = password
      },
      {
        abortEarly: false, // bắt lỗi validate với tất cả các input đàu vào
      }
    );

    console.log("data is valid");
  } catch (error) {
    console.log(error.errors);

    for (const e of error.inner) {
      console.log(e.path); // which field
      console.log(e.message); // which error messsage
    }
  }
})();
