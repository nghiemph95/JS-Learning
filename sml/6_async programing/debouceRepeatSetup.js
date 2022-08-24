/** Re-setup deboucne */

/** setup */
function debounce(callback, wait) {}

function log() {}

const showDebounce = debounce(log, wait);
showDebounce();
showDebounce();
showDebounce();

/** implement Debounce */
function debounceSetup(callback, wait) {
  let timeoutId; // Lexical scope

  //Closure
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, wait);
  };
}

function eventLog() {
  console.log("The event completed");
}

const debounceRun = debounceSetup(eventLog, 3000);
debounceRun();
debounceRun();
debounceRun();
debounceRun();

/** Setup lần 2 hàm debounce */
function deboucneRun(callback, wait) {
  let flagTimeout;

  return function () {
    if (flagTimeout) {
      clearTimeout(flagTimeout);
    }

    flagTimeout = setTimeout(callback, wait);
    console.log(flagTimeout);
  };
}

function showMessage() {
  console.log("Debounce run");
}

const debounceTest = deboucneRun(showMessage, 3000);
debounceTest();
debounceTest();
debounceTest();
