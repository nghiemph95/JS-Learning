export function generatePrimeNumbers(n) {
  if (!n) return;

  /** Function check số nguyên tố */
  function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return number;
    }
  }

  /** Array với n phần tử */
  let array = [];
  array = Array.from({ length: n }, (_, i) => i);

  let newArray = [];

  /** Mảng các số nguyên tố nhỏ hơn n */
  array.find((element) => {
    const isPrime = checkPrime(element);
    newArray.push(isPrime);
  });

  return newArray.filter((e) => e !== false);
}

console.log(generatePrimeNumbers(20));
