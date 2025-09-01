export const uiSelectors = {
  faceImageQuality: {
    scenarioControl: 'div[class*="select__control"]',
    scenarioMenu: 'div[class*="select__menu"]',
    scenarioOption: 'div[class*="select__option"]',
    uploadButton: 'button[data-test="button-upload-file"], button:has-text("Upload a file")',
    imageSelected: 'img[class*="mainImage"]',
    resultsTab: 'div[role="tab"][class*="Tabs_results"]',
    resultsStatus: 'span[class*="Intro_status-text"]',
    requestTab: 'div[role="tab"][class*="Tabs_request"]',
    responseTab: 'div[role="tab"][class*="Tabs_response"]',
  },
  navigation: {
    faceQualityLink: 'text=Face image quality',
  },
  common: {
    cookieAcceptAll: '.cookiebanner__button__all',
    privacyConfirm: 'button:has-text("Confirm")',
  },
} as const;
