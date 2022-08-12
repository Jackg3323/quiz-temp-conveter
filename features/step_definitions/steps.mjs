import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "expect";
import tryConvert from "../../app/index.js";

Given("I have a temperature of {int}° {units}", function (temp2Convert, _) {
  this.temp2Convert = temp2Convert;
});

When("I convert it to degrees {units}", function (units) {
  this.convertedTemp = tryConvert(this.temp2Convert, units);
});

Then("I see {int}° {units}", function (expected, _) {
  const expectHelper = () => {
    expect(this.convertedTemp).toBe(expected.toString());
  };

  expectHelper();
});
