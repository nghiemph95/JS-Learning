//v1
function isNumber(n) {
  let isValid;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}
console.log(isNumber(2));

//v2
function isNumber(n) {
  let isValid = false;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}

console.log(isNumber(2));

//v3
function isNumber(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }
  return false;
}

//v4
function isNumber(n) {
  return n > 0 && n % 2 === 0;
}
console.log(isNumber(3.8));

//re-v1
function isNumber(n) {
  let check;

  if (n > 0 && n % 2 === 0) {
    check = true;
  } else {
    check = false;
  }

  return check;
}

//re-v2
function isNumber(n) {
  let check = 0;

  if (n > 0 && n % 2 === 0) {
    check = 1;
  }

  return check;
}

console.log(isNumber(3));

//re-v3
function isNumber(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }
  return false;
}

//re-v4
function isNumber(n) {
  return n > 0 && n % 2 === 0;
}
console.log(isNumber(4));
