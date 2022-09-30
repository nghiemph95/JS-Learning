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
      element.src = "https://via.placeholder.com/468x110?text=thumbnail";
    });
  }
}
