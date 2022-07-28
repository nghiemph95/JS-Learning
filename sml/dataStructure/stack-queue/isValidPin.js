const PIN_LENGTH = 6;

function isValidPin(pin) {
  if (pin.length !== PIN_LENGTH) return false;

  // pin has only digits
  if (Array.from(pin).some((element) => element < "0" || element > "9"))
    return false;

  //should not be a simple sequence number
  const inscreseNumber = "0123456789";
  const descreseNumber = "9876543210";

  if (inscreseNumber.includes(pin) || descreseNumber.includes(pin))
    return false;

  //should not contain digit appearing more than 2 times
  if ([...new Set(pin.split(""))].length < PIN_LENGTH) return false;
  return true;
}

console.log(isValidPin("235987"));

console.log([...new Set("235977".split(""))].length);

console.log(Array.from("235987").some((element) => element < 0 || element > 9));
