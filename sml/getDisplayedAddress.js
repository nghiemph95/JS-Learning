export function getDisplayedAddress(address) {
  if (typeof address !== "object") return {};

  let res = "";
  let word = "";
  for (const check in address) {
    if (typeof address[check] === "number") {
      res = `${address[check]} `;
    } else {
      word = `${address[check]}, `;
    }
    res = res + word;
  }
  return res.slice(0, -2);
}

// console.log(
//   getDisplayedAddress({
//     number: 123,
//     street: "Nguyen Cong Tru",
//     ward: "Ward 11",
//     district: "Binh Thanh District",
//     city: "HCMC",
//   })
// );

// const object = {
//   // number: 123,
//   street: "Nguyen Cong Tru",
//   // ward: "Ward 11",
//   district: "Binh Thanh District",
//   // city: "HCMC",
// };

// const arr = Object.values(object);
// console.log(arr);
// const str = arr.join(', ');
// console.log(str);

// for (const check in object) {
//   const array = [];
//     console.log(object[check]);

// }
