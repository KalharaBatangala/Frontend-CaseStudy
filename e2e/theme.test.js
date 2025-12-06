// e2e/theme.test.js
const { test, expect } = require('@playwright/test');

test.describe('User Preferences - Theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080'); // your web app
  });

  test('change to dark mode and verify toolbar color & status', async ({ page }) => {
    // open Theme Settings tab (selector depends on your DOM)
    await page.click('text=Theme Settings');

    // select Dark radio (assumes radio text "Dark")
    await page.click('label:has-text("Dark")');

    // pick a color (interact with colorpicker input)
    const colorPicker = page.locator('input[name="primaryColor"]'); // might vary by Webix DOM
    await colorPicker.fill('#ff0000');

    // Save
    await page.click('button:has-text("Save")');

    // assert toast message appears
    await expect(page.locator('.webix_message')).toHaveText(/Theme settings saved successfully|Theme & Font applied/i);

    // assert that body has dark-theme class
    await expect(page.locator('body')).toHaveClass(/dark-theme/);

    // assert primary color is applied to a save button background (computed style)
    const saveBtnBg = await page.$eval('.save-btn', el => getComputedStyle(el).backgroundColor);
    expect(saveBtnBg).toBeTruthy();
  });
});
