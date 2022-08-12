import tempConvert from "./index.js";

describe("tempConvert for celcius", () => {
  test("converts temp to celcius", () => {
    expect(tempConvert(100, "toFahrenheit")).toBe("212");
    expect(tempConvert(50, "toFahrenheit")).toBe("122");
  });

  test("converts temp to celcius", () => {
    expect(tempConvert("one hundred", "toFahrenheit")).toBe("");
    expect(tempConvert("fifty", "toFahrenheit")).toBe("");
  });
});

describe("tempConvert for Fahrenheit", () => {
  test("converts temp to Fahrenheit", () => {
    expect(tempConvert(50, "toCelsius")).toBe("10");
    expect(tempConvert(100, "toCelsius")).toBe("38");
  });

  // second test does not round

  test("converts temp to Fahrenheit", () => {
    expect(tempConvert("fifty", "toCelsius")).toBe("");
    expect(tempConvert("one hundred", "toCelsius")).toBe("");
  });
});
