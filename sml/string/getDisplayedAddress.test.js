import { getDisplayedAddress } from "./getDisplayedAddress";

describe("Test getDisplayedAddress()", () => {
  test("should return full sentence object", () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: "Nguyen Cong Tru",
        ward: "Ward 11",
        district: "Binh Thanh District",
        city: "HCMC",
      })
    ).toBe("123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC");
  });

  test("should return full sentence object", () => {
    expect(
      getDisplayedAddress({
        street: "Nguyen Cong Tru",
        district: "Binh Thanh District",
      })
    ).toBe("Nguyen Cong Tru, Binh Thanh District");
  });
});
