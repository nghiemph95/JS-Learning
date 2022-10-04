/** Pure function - Dump function */
// hàm search
export function initSearch({ elementId, defaultParams, onChange }) {
  const searchInput = document.getElementById(elementId);
  if (!searchInput) return;

  // set default value from query params
  // title_like
  if (defaultParams && defaultParams.get("title_like")) {
    searchInput.value = defaultParams.get("title_like");
  }

  const debounceSearch = debounce(
    // khi nào có truyền vô hàm onChange thì mới gọi lên hàm cha, ko thì thôi
    (event) => onChange?.(event.target.value),
    500
  );
  searchInput.addEventListener("input", debounceSearch);
}
