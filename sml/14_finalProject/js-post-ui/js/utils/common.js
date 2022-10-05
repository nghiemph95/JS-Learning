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

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;

  return `${text.slice(0, maxLength - 1)}...`;
}
