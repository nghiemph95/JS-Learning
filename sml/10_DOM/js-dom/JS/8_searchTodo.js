function initSearchInput() {
  // find search term input
  const searchInput = document.getElementById('searchTerm');
  if (!searchInput) return;

  // gắn sự kiên cho searchInput
  searchInput.addEventListener('input', () => {
    console.log('input', searchInput.value);
  });
}

//main
(() => {
  initSearchInput();
})();
