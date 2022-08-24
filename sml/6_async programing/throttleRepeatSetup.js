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

setTimeout(showThrottle, 2000);
setTimeout(showThrottle, 3000);
setTimeout(showThrottle, 4000);

/** Setup 2nd throttle */
function throttleRun(callback, wait) {
  let flagThrottle = false;

  return function () {
    if (flagThrottle) return;

    flagThrottle = true;
    setTimeout(() => {
      callback();
      flagThrottle = false;
    }, wait);
  };
}

function showThrottleMessage() {
  console.log("Throttle Show");
}

const funcThrottleRun = throttleRun(showThrottleMessage, 500);

funcThrottleRun(); //turn on flag
funcThrottleRun();
funcThrottleRun();
funcThrottleRun();
funcThrottleRun();

setTimeout(funcThrottleRun, 600);
setTimeout(funcThrottleRun, 1000);
setTimeout(funcThrottleRun, 1500);
