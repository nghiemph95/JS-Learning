// PLEASE USE ALL OF THESE CONSTANTS IN YOUR CODE
// DO NOT USE HARDCODE NUMBER IN YOUR CODE
const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

export function withdraw(amount) {
  if (amount < BASE_UNIT || amount % BASE_UNIT !== 0) return "Invalid balance";

  const total =
    K500_VALUE * K500_QUANTITY +
    K200_VALUE * K200_QUANTITY +
    K100_VALUE * K100_QUANTITY +
    K50_VALUE * K50_QUANTITY;
  if (amount > total) return "Insufficient balance from ATM";

  let checkAmount = amount;

  const current_500_quantity =
    checkAmount > K500_VALUE * K500_QUANTITY
      ? K500_QUANTITY
      : Math.trunc(checkAmount / K500_VALUE);

  checkAmount -= current_500_quantity * K500_VALUE;

  const current_200_quantity =
    checkAmount > K200_VALUE * K200_QUANTITY
      ? K200_QUANTITY
      : Math.trunc(checkAmount / K200_VALUE);

  checkAmount -= current_200_quantity * K200_VALUE;

  const current_100_quantity =
    checkAmount > K100_VALUE * K100_QUANTITY
      ? K100_QUANTITY
      : Math.trunc(checkAmount / K100_VALUE);

  checkAmount -= current_100_quantity * K100_VALUE;

  const current_50_quantity = checkAmount / K50_VALUE;

  return {
    k500: current_500_quantity,
    k200: current_200_quantity,
    k100: current_100_quantity,
    k50: current_50_quantity,
  };
}
