import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({
  name: "units",
  regexp: /\s?C|\s?F|\s?Celsius|\s?Fahrenheit/,
  transformer(name) {
    return name.startsWith("C") ? "toCelsius" : "toFahrenheit";
  },
});
