/** throttle trigger cái hàm của mình tối đa 1 lần trong khoảng thời gian quy ước */
function log() {
  console.log("tada");
}

function throttle(callback, wait) {
  let isThrottling = false;

  return function () {
    if (isThrottling) return; // 2, 3, 4 come here

    isThrottling = true; // 1 come here
    setTimeout(() => {
      callback();

      isThrottling = false;
    }, wait);
  };
}

const throttleLog = throttle(log, 500);

throttleLog(); // set timeout 500 -> call -> turn off flag throttle
throttleLog(); // check throttling -> ignore
throttleLog(); // check throttling -> ignore
throttleLog(); // check throttling -> ignore
throttleLog(); // check throttling -> ignore

setTimeout(throttleLog, 600); // start throttling
setTimeout(throttleLog, 600);
setTimeout(throttleLog, 600);
setTimeout(throttleLog, 600);
setTimeout(throttleLog, 700);
setTimeout(throttleLog, 800);
setTimeout(throttleLog, 900);
setTimeout(throttleLog, 1100);
setTimeout(throttleLog, 1200);
setTimeout(throttleLog, 1400);
setTimeout(throttleLog, 1700);
setTimeout(throttleLog, 1800);
setTimeout(throttleLog, 1900);
