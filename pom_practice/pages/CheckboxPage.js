import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class CheckboxPage {
  constructor(page) {
    this.actions = new CommonActions(page);
  }

  async navigate() {
    await this.actions.navigate("https://the-internet.herokuapp.com/");
    await this.actions.click('text="Checkboxes"');
  }

  async clickCheckbox(index) {
    await this.actions.click(`input[type="checkbox"]:nth-of-type(${index})`);
  }

  async assertClickedCheckbox(index, expectedResult){
    const isChecked = await this.actions.isChecked(`input[type="checkbox"]:nth-of-type(${index})`)
    expect(isChecked).toBe(expectedResult)
  }
}
