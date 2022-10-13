import { setFieldValue, setHeroImage } from "./common";

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

export function initPostForm({ formId, defaultValues, onSubmit }) {
  const form = document.getElementById(formId);
  if (!formId) return;

  // tạo form value (thằng cha cho giá trị gì thì set giá trị đó)
  console.log("form", form);
  setFormValues(form, defaultValues);

  // gắn sự kiện submit cho form
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("submit form");

    // get form values
    const formValues = getFormValues(form);
    console.log(formValues);
    // validation
    // nếu validation valid thì trigger submit
    // nếu không thì show errors
  });
}
