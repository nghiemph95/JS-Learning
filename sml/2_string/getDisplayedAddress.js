/** Ghép chuỗi từ các thuộc tính của object thành một chuỗi addres hoàn chỉnh */
export function getDisplayedAddress(address) {
  if (typeof address !== "object") return {};

  let res = "";

  for (const check in address) {
    let word =
      typeof address[check] === "number"
        ? `${address[check]} `
        : `${address[check]}, `;

    res = res + word;
  }
  return res.slice(0, -2);
}

console.log(
  getDisplayedAddress({
    number: 123,
    street: "Nguyen Cong Tru",
    ward: "Ward 11",
    district: "Binh Thanh District",
    city: "HCMC",
  })
);

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
