export default class CommonActions {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async click(locator) {
    await this.page.click(locator);
  }

  async fill(locator, text) {
    await this.page.fill(locator, text);
  }

  async getText(locator) {
    return await this.page.textContent(locator);
  }

  async isChecked(locator){
    return await this.page.isChecked(locator)
  }
}
