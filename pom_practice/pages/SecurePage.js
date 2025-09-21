import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class SecurePage {
  
  constructor(page){
    this.actions = new CommonActions(page)
  }

  async assertLoginMessage(message){
    expect(await this.actions.getText('#flash')).toContain(message)
  }

}