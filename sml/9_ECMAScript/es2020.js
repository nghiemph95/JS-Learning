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

/** Nullish Coalescing
 */
const value = x ?? y;
// - return y if x is nullish (null or undefined)
// - otherwise return x

null ?? "Easy Frontend"; // 'Easy Frontend'
undefined ?? "Easy Frontend"; // 'Easy Frontend'

"" ?? "Easy Frontend"; // ''
0 ?? "Easy Frontend"; // 0
Number.NaN ?? "Easy Frontend"; // NaN
false ?? "Easy Frontend"; // false

null || "Easy Frontend"; // 'Easy Frontend'
undefined || "Easy Frontend"; // 'Easy Frontend'
"" || "Easy Frontend"; // 'Easy Frontend'
0 || "Easy Frontend"; // 'Easy Frontend'
Number.NaN || "Easy Frontend"; // 'Easy Frontend'
false || "Easy Frontend"; // 'Easy Frontend'

/** Optional Chaining */
obj?.prop; // optional static property access
obj?.[expr]; // optional dynamic property access
arr?.[index]; // optional array item access
func?.(args); // optional function or method call

const student = {
  id: 1,
  address: {
    city: "HCMC",
  },
  hobbies: ["music"],
  sayHello() {
    console.log("Hello");
  },
};
student.address.city; // 'HCMC'
student.hobbies[0]; // 'music'
student.sayHello(); // 'Hello'
// but what if you're trying to access non-existing props in the chain
student.profile.name;
// TypeError: Cannot read property 'name' of undefined
student.colors[0];
// TypeError: Cannot read property '0' of undefined
student.learnJavascript();
// TypeError: student.learnJavascript is not a function

if (student.profile) {
  console.log(student.profile.name);
}

// Optional chaining
student.profile?.name; // undefined
student.colors?.[0]; // undefined
student.learnJavascript?.(); // undefined

/** Promise.allSettled */
const p1 = new Promise((res, rej) => setTimeout(res, 1000));
const p2 = new Promise((res, rej) => setTimeout(rej, 1000));
Promise.allSettled([p1, p2]).then((data) => console.log(data));
// Output
// [
// Object { status: "fulfilled", value: undefined},
// Object { status: "rejected", reason: undefined}
// ]

/** globalThis */
// before ES2020
var getGlobal = function () {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};

var globals = getGlobal();

if (typeof globals.setTimeout !== "function") {
  // no setTimeout in this environment!
}
//Browser : window - Nodejs: global

// when working with server side rendering,
// you may see this code block to check whether it's client or server
if (typeof window !== "undefined") {
  // it's on client side
} else {
  // it's on server side
}

/** Module Namespace Exports */
// before ES2020
import * as utils from "./utils.mjs";
export { utils };
// ES2020
export * as utils from "./utils.mjs";

/** Import.meta */
console.log(import.meta); // { url: "file:///home/user/module.js" }
