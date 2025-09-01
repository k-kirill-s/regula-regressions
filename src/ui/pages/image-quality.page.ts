import { Page, Locator, expect } from '@playwright/test';

import { uiSelectors } from '../selectors';
import { BasePage } from './base.page';
import { Scenario } from '../../types/detect';

export class FaceImageQualityPage extends BasePage {
  readonly navigation: Locator;
  readonly scenarioPicker: Locator;
  readonly uploadButton: Locator;
  readonly resultsTab: Locator;
  readonly resultsStatus: Locator;
  readonly requestTab: Locator;
  readonly responseTab: Locator;

  constructor(page: Page) {
    super(page);
    this.navigation = page.locator(uiSelectors.navigation.faceQualityLink);
    this.scenarioPicker = page.locator(uiSelectors.faceImageQuality.scenarioControl);
    this.uploadButton = page.locator(uiSelectors.faceImageQuality.uploadButton);
    this.resultsTab = page.locator(uiSelectors.faceImageQuality.resultsTab);
    this.resultsStatus = page.locator(uiSelectors.faceImageQuality.resultsStatus);
    this.requestTab = page.locator(uiSelectors.faceImageQuality.requestTab);
    this.responseTab = page.locator(uiSelectors.faceImageQuality.requestTab);
  }

  async open() {
    await this.goto('/');
    await this.navigation.click();
    await this.isLoaded();
  }

  async isLoaded() {
    await expect(this.scenarioPicker).toBeVisible();
  }

  async selectScenario(scenario: Scenario) {
    await this.scenarioPicker.click();
    await this.page
      .locator(uiSelectors.faceImageQuality.scenarioMenu)
      .waitFor({ state: 'visible' })
      .catch(() => {});

    await this.page
      .locator(uiSelectors.faceImageQuality.scenarioOption)
      .filter({ hasText: scenario.ui })
      .first()
      .click();
  }

  async uploadImage(filePath: string) {
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await this.uploadButton.click();
    await this.confirmPrivacyIfPresent();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(filePath);
  }

  async getComplianceStatus(): Promise<string> {
    await this.resultsTab.click();
    const status = await this.resultsStatus.textContent();
    return status || '';
  }
}
