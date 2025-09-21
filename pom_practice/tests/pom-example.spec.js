import { test, expect } from "@playwright/test";
import PomManager from "../pages/PomManager.js";

let pm;

test.describe("Login page", () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Log in with correct credentials", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.login("tomsmith", "SuperSecretPassword!");
    await pm.securePage.assertLoginMessage("You logged into a secure area!");
  });

  test("Log in with invalid username", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.login("invalidUsername", "SuperSecretPassword!");
    await pm.loginPage.assertUsernameErrorMsg("Your username is invalid!");
  });
});

test.describe.only("Checkbox page", () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Check uncheck checboxes", async () => {
    await pm.checkboxPage.navigate();
    await pm.checkboxPage.clickCheckbox(2);
    await pm.checkboxPage.assertClickedCheckbox(2, false);
  });
});
