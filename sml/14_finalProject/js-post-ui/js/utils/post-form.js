import { setFieldValue, setHeroImage, setTextContent } from "./common";

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
function getTitleError(form) {
  return "";
}

//hàm trả về true/false
function validatePostForm(form, formValues) {
  //lấy thông tin error
  const errors = {
    title: getTitleError(form),
    // title: getAuthorError(form),
    //...
  };

  //gắn error mess lên dom
  for (const key in errors) {
    const element = form.querySelector(`[name="${key}"]`);
    if (element) {
      // gắn error theo key(title, author, description,...) lên thẻ input
      element.setCustomValidity(errors[key]);
      //cập nhật cho thẻ div.invalid-feedback
      setTextContent(element.parentElement, ".invalid-feedback", errors[key]);
    }
  }

  //gắn was-validated class to form element(HTML) để show lên cái error message
  const isValid = form.checkValidity();
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

    console.log("submit form");

    // get form values
    const formValues = getFormValues(form);
    console.log("formValues: ", formValues);
    // validation
    // nếu validation valid thì trigger submit
    // nếu không thì show errors

    if (!validatePostForm(form, formValues)) return;
  });
}
