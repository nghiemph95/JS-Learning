function showModel(modalElement) {
  const modal = new window.bootstrap.Modal(modalElement);

  if (modal) modal.show();
}

export function registerLightbox({
  modalId,
  imgSelector,
  prevSelector,
  nextSelector,
}) {
  const modalElement = document.getElementById(modalId);
  if (!modalElement) return;

  // check nếu modalElement đã được registered
  if (modalElement.dataset.registerd) return;

  // lấy ra các selectors
  const imageElement = modalElement.querySelector(imgSelector);
  const prevButton = modalElement.querySelector(prevSelector);
  const nextButton = modalElement.querySelector(nextSelector);
  if (!imageElement || !prevButton || !nextButton) return;

  // lightbox variable
  let imgList = [];
  let currentIndex = 0;

  function showImageAtIndex(index) {
    imageElement.src = imgList[index].src;
  }

  // handle click cho các image -> áp dụng kỷ thuật event delegation
  document.addEventListener("click", (event) => {
    const { target } = event;
    if (target.tagName !== "IMG" || !target.dataset.album) return;

    // tìm các hình ảnh có cùng album/galary
    // lấy các hình các data là album
    imgList = document.querySelectorAll(
      `img[data-album="${target.dataset.album}"]`
    );

    // xác định hình click trong album đang nằm ở index nào
    currentIndex = [...imgList].findIndex((x) => x === target);

    // hiển thị hình được chọn tai index
    showImageAtIndex(currentIndex);

    // chỉ show modal chỉ đúng lúc click vào hình
    showModel(modalElement);
    console.log("album click", { target, imgList, currentIndex });
  });

  // handle nút prev click chuyển hình (0->2->1->0->2->1)
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imgList.length) % imgList.length;
    showImageAtIndex(currentIndex);
  });

  // handle nút next click chuyển hình (0->1->2->0->1->2)
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imgList.length;
    showImageAtIndex(currentIndex);
  });

  // set true flag khi có 1 hình đã click vào 1 hình bất kìddd
  modalElement.dataset.registerd = "true";
}
