export function setTextContent(parent, selector, text) {
  if (!parent) return;

  const element = parent.querySelector(selector);
  if (element) element.textContent = text;
}

export function setImageContent(parent, selector, imageUrl) {
  if (!parent) return;

  const element = parent.querySelector(selector);
  if (element) element.src = imageUrl;
}
