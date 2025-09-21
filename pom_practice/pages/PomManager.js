import LoginPage from "./LoginPage.js";
import SecurePage from "./SecurePage.js";
import CheckboxPage from "./CheckboxPage.js";

export default class PomManager {

  constructor(page){
    this.loginPage = new LoginPage(page)
    this.securePage = new SecurePage(page)
    this.checkboxPage = new CheckboxPage(page)
  }

}