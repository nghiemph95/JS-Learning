export function registerLightbox() {
  // handle click cho các image -> áp dụng kỷ thuật event delegation
  document.addEventListener("click", (event) => {
    console.log("click", event.target);
  });
  // tìm các hình ảnh có cùng album/galary
  // xác định hình click trong album đang nằm ở index nào
  // hiển thị hình được chọn
  // handle nút prev/next click chuyển hình
}
