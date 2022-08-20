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
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, wait);
  };
}

function eventTrigger() {
  console.log("The event has completed !");
}

const logDebounce = debounceSetup(eventTrigger, 3000);
logDebounce();
logDebounce();
logDebounce();
logDebounce();
