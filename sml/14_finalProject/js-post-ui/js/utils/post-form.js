import { setFieldValue, setHeroImage, setTextContent, randomNumber } from ".";
import * as yup from "yup";

const ImageSource = {
  PICSUM: "picsum",
  UPLOAD: "upload",
};

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
  // ["title", "author", "description", "imageUrl"].forEach((element) => {
  //   const field = form.querySelector(`[name="${element}"]`);
  //   if (field) formValues[element] = field.value;
  // });

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
    description: yup.string().required("Please input description"),
    imageSource: yup
      .string()
      .required("Please select an image source")
      .oneOf([ImageSource.PICSUM, ImageSource.UPLOAD], "Invalid image source"),
    imageUrl: yup.string().when("imageSource", {
      is: ImageSource.PICSUM,
      then: yup
        .string()
        .required("Please random a background image")
        .url("Please enter a valid URL"),
    }),
    image: yup.mixed().when("imageSource", {
      is: ImageSource.UPLOAD,
      then: yup
        .mixed()
        .test("required", "Please select an image to upload", (file) =>
          // Nếu file.name ko tồn tại thì return false
          Boolean(file?.name)
        )
        .test("max-3mb", "The image is two large (max 3mb)", (file) => {
          const fileSize = file?.size || 0;
          const MAX_SIZE = 3 * 1024 * 1024;
          return fileSize <= MAX_SIZE;
        }),
    }),
  });
}

function setFieldError(form, name, error) {
  const element = form.querySelector(`[name="${name}"]`); //name: ["title", "author", "description"]
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
    ["title", "author", "description", "imageUrl", "image"].forEach((name) =>
      setFieldError(form, name, "")
    );

    //validate với schema đã định nghĩa bên trên
    const schema = getPostSchema();
    await schema.validate(formValues, { abortEarly: false });
  } catch (error) {
    const errorLog = {};

    if (error.name === "ValidationError" && Array.isArray(error.inner)) {
      for (const validationError of error.inner) {
        const name = validationError.path;

        // bỏ qua nếu đã log error của 1 field nào đó và không cho log tiếp error của field đó lần nữa
        if (errorLog[name]) continue; //bỏ qua nếu tồn tại errorLog[name]

        // set field error and mark as logged
        setFieldError(form, name, validationError.message);
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

// hàm chỉ validate 1 field duy nhất
async function validationFormField(form, formValues, name) {
  try {
    //clear pervious error
    setFieldError(form, name, "");

    const schema = getPostSchema();
    await schema.validateAt(name, formValues); // image, title, imageUrl = name
  } catch (error) {
    setFieldError(form, name, error.message);
  }

  // show validation err
  const field = form.querySelector(`[name = "${name}"]`);
  if (field && !field.checkValidity()) {
    field.parentElement.classList.add("was-validated");
  }
}

// enable cái button Save
function showLoading(form) {
  const button = form.querySelector('[name="submit"]');
  if (button) {
    button.disabled = true;
    button.textContent = "Saving...";
  }
}

// disable button Save
function hideLoading(form) {
  const button = form.querySelector('[name="submit"]');
  if (button) {
    button.disabled = false;
    button.textContent = "Save";
  }
}

// khởi tạo sự kiện randomImage
function initRandomImage(form) {
  const randomButton = document.getElementById("postChangeImage");
  if (randomButton) {
    randomButton.addEventListener("click", () => {
      //randomID
      // build URL
      const imageUrl = `https://picsum.photos/id/${randomNumber(
        1000
      )}/1368/400`;

      // set imageUrl input + background
      setFieldValue(form, '[name="imageUrl"]', imageUrl); // hidden field
      setHeroImage(document, "postHeroImage", imageUrl);
    });
  }
}

function renderImageSourceControl(form, selectedValue) {
  const controlList = form.querySelectorAll('[data-id="imageSource"]');
  controlList.forEach((control) => {
    control.hidden = control.dataset.imageSource !== selectedValue;
  });
}

// Khơi tạo sự kiện radio
function initRadioImageSource(form) {
  // tìm tất cả radio có cùng name là ImageSource
  const radioList = form.querySelectorAll('[name="imageSource"]');
  radioList.forEach((radio) => {
    radio.addEventListener("change", (event) =>
      renderImageSourceControl(form, event.target.value)
    );
  });
}

// khởi tạo sự kiện upload images
function initUploadImage(form) {
  const uploadImage = form.querySelector('[name="image"]');
  if (uploadImage) {
    uploadImage.addEventListener("change", (event) => {
      // console.log("selected file", event.target.files[0]);
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setHeroImage(document, "postHeroImage", imageUrl);

        // trigger validation of upload input
        validationFormField(
          form,
          { imageSource: ImageSource.UPLOAD, image: file },
          "image"
        );
      }
    });
  }
}

function initValidaitonOnChange(form) {
  ["title", "author"].forEach((name) => {
    const field = form.querySelector(`[name = "${name}"]`);
    if (field) {
      field.addEventListener("input", (event) => {
        const newValue = event.target.value;
        validationFormField(form, { [name]: newValue }, name);
      });
    }
  });
}

export function initPostForm({ formId, defaultValues, onSubmit }) {
  const form = document.getElementById(formId); //formId = 'postForm'
  if (!form) return;

  let submitting = false;

  // tạo form value (thằng cha cho giá trị gì thì set giá trị đó)
  // console.log("form: ", form);
  setFormValues(form, defaultValues);

  // khởi tạo sự kiện randomImage
  initRandomImage(form);

  // Khơi tạo sự kiện radio
  initRadioImageSource(form);

  // khởi tạo sự kiện upload image
  initUploadImage(form);

  // khỏi tạo sự kiện validation từng input field
  initValidaitonOnChange(form);

  // gắn sự kiện submit cho form
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (submitting) {
      return;
    }

    // show loading/disabled button
    showLoading(form);
    submitting = true;

    // get form values
    const formValues = getFormValues(form);
    // lấy formId từ defaultValude gắn cho formValues
    formValues.id = defaultValues.id;
    console.log("formValues: ", formValues);
    // validation
    // nếu validation valid thì trigger submit
    // nếu không thì show errors

    if (!validatePostForm(form, formValues)) return;

    //validation(1)
    // trường hợp hàm validatePostForm bên trên là async thì ở đây
    // phải set await để đợi cái hàm validatePostForm chạy xong
    // tại vì khi đó cái if sẽ là 1 promise, mà promise là truthy
    // nên cái if này sẽ ko bh thỏa
    const isValid = await validatePostForm(form, formValues);

    //truyền formValues vào onSubmit
    if (isValid) await onSubmit?.(formValues);

    // sau khi submit xong thi hideloading
    hideLoading(form);
    submitting = false;
  });
}
