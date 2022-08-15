import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({
  name: "units",
  regexp: /\s?C|\s?F|\s?Celsius|\s?Fahrenheit/,
  transformer(name) {
    return name.includes("C") ? "toCelsius" : "toFahrenheit";
  },
});
