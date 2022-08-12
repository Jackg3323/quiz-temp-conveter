import tempConvert from "./index.js";

describe("tempConvert for celcius", () => {
  test("converts temp to celcius", () => {
    expect(tempConvert(100, "toFahrenheit")).toBe("212");
    expect(tempConvert(50, "toFahrenheit")).toBe("122");
  });

  test("converts temp to celcius with string", () => {
    expect(tempConvert("one hundred", "toFahrenheit")).toBe("");
    expect(tempConvert("fifty", "toFahrenheit")).toBe("");
  });

  test("converts temp to celcius with no temp", () => {
    expect(tempConvert("toFahrenheit")).toBe("");
    expect(tempConvert("toFahrenheit")).toBe("");
  });

  test("converts temp to celcius with string temp", () => {
    expect(tempConvert("100", "toFahrenheit")).toBe("212");
    expect(tempConvert("50", "toFahrenheit")).toBe("122");
  });
});

describe("tempConvert for Fahrenheit", () => {
  test("converts temp to Fahrenheit", () => {
    expect(tempConvert(50, "toCelsius")).toBe("10");
    expect(tempConvert(100, "toCelsius")).toBe("37.778");
  });

  // second test does not round

  test("converts temp to Fahrenheit with string", () => {
    expect(tempConvert("fifty", "toCelsius")).toBe("");
    expect(tempConvert("one hundred", "toCelsius")).toBe("");
  });

  test("converts temp to Fahrenheit with no temp", () => {
    expect(tempConvert("toCelsius")).toBe("");
    expect(tempConvert("toCelsius")).toBe("");
  });

  test("converts temp to Fahrenheit with string temp", () => {
    expect(tempConvert("100", "toCelsius")).toBe("37.778");
    expect(tempConvert("50", "toCelsius")).toBe("10");
  });
});
