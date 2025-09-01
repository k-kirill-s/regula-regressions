export const uiSelectors = {
  faceImageQuality: {
    uploadButton: '[data-testid="face-quality-upload-button"]',
    resultContainer: '[data-testid="face-quality-result-container"]',
    qualityScore: '[data-testid="face-quality-score"]',
    errorMessage: '[data-testid="face-quality-error"]',
    uploadInput: 'input[type="file"][data-testid="face-quality-file-input"]',
    scenarioPicker: 'select[data-testid="scenario-picker"]',
  },
  navigation: {
    faceQualityLink: '[data-testid="nav-face-quality"]',
  },
  common: {
    loadingIndicator: '[data-testid="loading-indicator"]',
    uploadInstructions: '[data-testid="upload-instructions"]',
    qualityDetails: '[data-testid="quality-details"]',
  },
} as const;
