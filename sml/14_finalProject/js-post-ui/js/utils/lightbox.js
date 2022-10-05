export function registerLightbox() {
  // handle click cho các image -> áp dụng kỷ thuật event delegation
  document.addEventListener("click", (event) => {
    const { target } = event;
    if (target.tagName !== "IMG" || !target.dataset.album) return;

    // tìm các hình ảnh có cùng album/galary
    // lấy các hình các data là album
    let imgList = document.querySelectorAll(
      `img[data-album="${target.dataset.album}"]`
    );
    // xác định hình click trong album đang nằm ở index nào
    const index = [...imgList].findIndex((x) => x === target);
    console.log("album click", { target, imgList, index });
  });

  // hiển thị hình được chọn
  // handle nút prev/next click chuyển hình
}
