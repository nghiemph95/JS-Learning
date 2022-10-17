import { setFieldValue, setHeroImage, setTextContent } from ".";
import * as yup from "yup";

function setFormValues(form, defaultValues) {
  setFieldValue(form, '[name="title"]', defaultValues?.title);
  setFieldValue(form, '[name="author"]', defaultValues?.author);
  setFieldValue(form, '[name="description"]', defaultValues?.description);
  setFieldValue(form, '[name="imageUrl"]', defaultValues?.imageUrl); // hidden field
  setHeroImage(document, "postHeroImage", defaultValues?.imageUrl);
}

function getFormValues(form) {
  const formValues = {};

  //S1: query each input and add to values object
  //   ["title", "author", "description", "imageUrl"].forEach((element) => {
  //     const field = form.querySelector(`[name="${element}"]`);
  //     if (field) formValues[element] = field.value;
  //   });

  //S2: using form data
  const data = new FormData(form);
  for (const [key, value] of data) {
    formValues[key] = value;
  }

  return formValues;
}

//hàm có nhiệm vụ trả về error message, nếu ko có error message thì trả về empty message
//validation(4)
// function getTitleError(form) {
//   const titleElement = form.querySelector('[name="title"]');
//   if (!titleElement) return;

//   //required
//   //kiểm tra xe đã nhập dữ liệu chưa (valueMissing = true tức là chưa) -validation(5)
//   if (titleElement.validity.valueMissing) {
//     return "Please enter title";
//   }

//   // at least two words
//   if (
//     titleElement.value.split(" ").filter((x) => !!x && x.length >= 3).length < 2
//   )
//     return "Please enter at least two words of 3 characters";
//   return "";
// }

//hàm check validation dựa vào Yup
function getPostSchema() {
  return yup.object().shape({
    title: yup.string().required("Please enter title"),
    author: yup
      .string()
      .required("Please enter author")
      .test(
        "at-least-two-words",
        "Please enter at least two words",
        (value) =>
          value.split(" ").filter((x) => !!x && x.length >= 3).length >= 2
      ),
    description: yup.string(),
  });
}

function setFieldError(form, name, error) {
  const element = form.querySelector(`[name="${name}"]`);
  console.log("setFiedlError -> Element", element);
  if (element) {
    // gắn error theo key(title, author, description,...) lên thẻ input
    // validation(7): gắn "Please enter title vô cái setCustomValidity"
    element.setCustomValidity(error);
    //cập nhật cho thẻ div.invalid-feedback - validation(8)
    setTextContent(element.parentElement, ".invalid-feedback", error);
  }
}

//hàm trả về true/false - validation(2)
async function validatePostForm(form, formValues) {
  //lấy thông tin error - validation(3)
  // const errors = {
  //   title: getTitleError(form),
  //   // title: getAuthorError(form),
  //   //...
  // };

  //gắn error mess lên dom - validation(6)
  // for (const key in errors) {
  //   const element = form.querySelector(`[name="${key}"]`);
  //   if (element) {
  //     // gắn error theo key(title, author, description,...) lên thẻ input
  //     // validation(7): gắn "Please enter title vô cái setCustomValidity"
  //     element.setCustomValidity(error);
  //     //cập nhật cho thẻ div.invalid-feedback - validation(8)
  //     setTextContent(element.parentElement, ".invalid-feedback", errors[key]);
  //   }
  // }

  try {
    //reset previous errors
    ["title", "author"].forEach((name) => setFieldError(form, name, ""));

    //validate với schema đã định nghĩa bên trên
    const schema = getPostSchema();
    console.log("schema", schema);
    await schema.validate(formValues, { abortEarly: false });
  } catch (error) {
    // console.log(error.name); //error
    // console.log(error.inner); //mảng

    const errorLog = {};

    if (error.name === "ValidationError" && Array.isArray(error.inner)) {
      for (const validationError of error.inner) {
        const name = validationError.path;

        // bỏ qua nếu đã log error của 1 field nào đó và không cho log tiếp error của field đó lần nữa
        if (errorLog[name]) continue; //bỏ qua nếu tồn tại errorLog[name]

        // set field error and mark as logged
        setFieldError(form, name, validatePostForm.message);
        console.log("validatePostForm", validationError.message);
        errorLog[name] = true;
      }
    }
  }

  //gắn was-validated class to form element(HTML) để show lên cái error message
  const isValid = form.checkValidity(); //checkValidity bằng false/true
  // sau khi chạy hết vòng for bên trên nó sẽ add class: was-validated - validation(9)
  if (!isValid) form.classList.add("was-validated");
  return isValid;
}

export function initPostForm({ formId, defaultValues, onSubmit }) {
  const form = document.getElementById(formId); //formId = 'postForm'
  if (!form) return;

  // tạo form value (thằng cha cho giá trị gì thì set giá trị đó)
  console.log("form: ", form);
  setFormValues(form, defaultValues);

  // gắn sự kiện submit cho form
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("submit form success!");

    // get form values
    const formValues = getFormValues(form);
    console.log("formValues: ", formValues);
    // validation
    // nếu validation valid thì trigger submit
    // nếu không thì show errors

    //validation(1)
    if (!validatePostForm(form, formValues)) return;
  });
}
