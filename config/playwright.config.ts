import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '../tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 1,
  reporter: [['html', { outputFolder: '..reports/playwright-report' }], ['list']],
  use: {
    actionTimeout: 0,
    baseURL: process.env.WEB_BASE_URL || 'https://faceapi.regulaforensics.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },
  outputDir: '../reports/test-results/',
});
