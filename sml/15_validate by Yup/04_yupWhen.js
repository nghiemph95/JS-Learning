import * as yup from "yup";

(async () => {
  const schema = yup.object().shape({
    //check spam
    checkSpam: yup.boolean(),
    isSpecial: yup.boolean(),
    //check title
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
      // test spam sẽ phụ thuộc vào checkSpam
      .when(["checkSpam", "isSpecial"], {
        is: true,
        then: yup
          .string() //number or string or ...
          .test(
            "should-not-spam",
            'Please not use "spam" in title',
            (value) => {
              return !value.includes("spam");
            }
          ),
      }),

    //check age
    age: yup
      .number()
      .required("please enter age")
      .min(10, "mis is ten")
      // khi nhập sai kiểu dữ liệu đã khai báo thì typeError sẽ bắt đúng kiểu dữ liệu
      .typeError("Please enter a valid number"),
    //check email
    email: yup.string().required().email("please enter a valide email"),
    //check password
    password: yup
      .string()
      .required("Please enter password")
      .min(6, "password should have at least 6 character"),
    //check enter new password
    retypePassword: yup
      .string()
      .required("Please enter retype password")
      .oneOf([yup.ref("password")], "password not match"),
  });

  try {
    await schema.validate(
      {
        //demo test
        checkSpam: true,
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
