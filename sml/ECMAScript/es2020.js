// finallied 6/2020

/** BigInt */
Number.MAX_SAFE_INTEGER; // 2^53 - 1 = 9007199254740991
Number.MAX_SAFE_INTEGER + 2; // 9007199254740992 ??? incorrect calculation
const balance = BigInt("9007199254740991");
balance + 2n; // 9007199254740993n

JSON.parse('{ "balance": 9007199254740993 }'); // { balance: 9007199254740992 }
// correct way to handle it
const json = '{ "balance": "9007199254740993" }';
const { balanceS } = JSON.parse(json);
BigInt(balanceS); // 9007199254740993n

/** Dynamic Import */
// math.js
const add = (num1, num2) => num1 + num2;
export { add };

// index.js
const doMath = async (num1, num2) => {
  if (num1 && num2) {
    const math = await import("./math.js");
    console.log(math.add(5, 10));
  }
};
doMath(4, 2);
