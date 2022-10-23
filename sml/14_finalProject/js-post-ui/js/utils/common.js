export function setTextContent(parent, selector, text) {
  if (!parent) return;

  const element = parent.querySelector(selector);
  if (element) element.textContent = text;
}

export function setImageContent(parent, selector, imageUrl) {
  if (!parent) return;

  const element = parent.querySelector(selector);
  if (element) {
    element.src = imageUrl;

    element.addEventListener("error", () => {
      element.src = "https://via.placeholder.com/1368x400?text=thumbnail";
    });
  }
}

export function setHeroImage(parent, selector, imageUrl) {
  if (!parent) return;

  const heroImage = parent.getElementById(selector);
  if (heroImage) {
    heroImage.style.backgroundImage = `url("${imageUrl}")`;

    heroImage.addEventListener("error", () => {
      console.log("load image error ->> use default placeholder");
      heroImage.src = "https://via.placeholder.com/1368x400?text=thumbnail";
    });
  }
}

export function setEditPageLink(parent, selector, text) {
  if (!parent) return;

  const editPageLink = parent.getElementById(selector);
  if (editPageLink) {
    editPageLink.href = `/add-edit-post.html?id=${text}`;
    editPageLink.innerHTML = '<i class="fas fa-edit"></i> Edit Post';
  }
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;

  return `${text.slice(0, maxLength - 1)}...`;
}

export function setFieldValue(form, selector, value) {
  if (!form) return;

  const field = form.querySelector(selector);
  if (field) field.value = value;
}

export function randomNumber(n) {
  if (n <= 0) return -1;

  return Math.round(Math.random() * n);
}
