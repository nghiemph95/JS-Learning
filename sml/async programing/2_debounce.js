/** giảm thiếu só lần trigger số lần even
 * Ứng dụng: Dùng khi người dùng nhập text để tìm kiếm
 * Ứng dung: Dùng để lấy kết quả resize cuối cùng của browser
 */

/** how it work */
function debounce(callback, wait) {}

function log() {}

const debounceLog = debounce(log, wait);
debounceLog();
debounceLog();
debounceLog();

/** simple implementation */
function debounce(callBack, wait) {
  let timeoutId; // Clouser

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callBack, wait);
  };
}

function log() {
  console.log("test");
}

const logDebounce = debounce(log, 5000);
logDebounce();
logDebounce();
logDebounce(); // log "test" at the end
