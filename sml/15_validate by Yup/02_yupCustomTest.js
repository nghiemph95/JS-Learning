import * as yup from "yup";

(async () => {
  const schema = yup.object().shape({
    title: yup.string().required("please enter title"),
    age: yup.number().required("please enter age").min(10, "mis is ten"),
    email: yup.string().required().email("please enter a valide email"),
  });

  try {
    await schema.validate(
      {
        title: "easy",
        age: 10,
        email: "abc@abc.com",
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
