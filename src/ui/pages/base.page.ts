import { Page, Locator, expect } from '@playwright/test';

import { uiSelectors } from '../selectors';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string = '/') {
    await this.page.goto(path);
    await this.acceptCookiesIfPresent();
  }

  async click(locator: Locator) {
    await expect(locator).toBeVisible();
    await locator.click();
  }

  async type(locator: Locator, text: string) {
    await expect(locator).toBeVisible();
    await locator.fill(text);
  }

  async attachFile(fileInput: Locator, filePath: string) {
    await expect(fileInput).toBeVisible();
    await fileInput.setInputFiles(filePath);
  }

  async waitForHidden(locator: Locator, timeout = 60_000) {
    await expect(locator)
      .toBeHidden({ timeout })
      .catch(() => {});
  }

  async waitForVisible(locator: Locator, timeout = 60_000) {
    await expect(locator).toBeVisible({ timeout });
  }

  async acceptCookiesIfPresent(timeout = 2_000) {
    const accept = this.page.locator(uiSelectors.common.cookieAcceptAll);
    try {
      await accept.waitFor({ state: 'visible', timeout });
      await accept.click({ timeout: 5_000 });
    } catch {
      // silently ignore if cookie banner not present
    }
  }

  async confirmPrivacyIfPresent(timeout = 2_000) {
    const accept = this.page.locator(uiSelectors.common.privacyConfirm);
    try {
      await accept.waitFor({ state: 'visible', timeout });
      await accept.click({ timeout: 5_000 });
    } catch {
      // silently ignore if privacy message not present
    }
  }
}
