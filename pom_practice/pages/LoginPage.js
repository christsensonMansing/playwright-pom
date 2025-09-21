import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class LoginPage {
  constructor(page) {
    this.actions = new CommonActions(page);
  }

  async navigate() {
    await this.actions.navigate("https://the-internet.herokuapp.com/");
    await this.actions.click('text="Form Authentication"');
  }

  async login(username, password) {
    await this.actions.fill("#username", username);
    await this.actions.fill("#password", password);
    await this.actions.click('button[type="submit"]');
  }

  async assertUsernameErrorMsg(msg){
    expect(await this.actions.getText('#flash')).toContain(msg)
  }
}
