/** Re-setup throttle */

function throttleSetup(callback, wait) {
  let isThrottle = false;

  return function () {
    if (isThrottle) return;

    isThrottle = true;
    setTimeout(() => {
      callback();
      isThrottle = false;
    }, wait);
  };
}

function eventRun() {
  console.log("Return here");
}

const showThrottle = throttleSetup(eventRun, 500);

showThrottle();
showThrottle();
showThrottle();
showThrottle();
