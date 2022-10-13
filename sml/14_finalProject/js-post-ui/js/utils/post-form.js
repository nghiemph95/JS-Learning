function setFormValues(form, formValues) {}

export function initPostForm({ formId, defaultValues, onSubmit }) {
  const form = document.getElementById(formId);
  if (!formId) return;

  // tạo form value (thằng cha cho giá trị gì thì set giá trị đó)
  console.log("form", form);
  setFormValues(form, defaultValues);
}
