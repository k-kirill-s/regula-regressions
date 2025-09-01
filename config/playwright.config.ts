import { resolve } from 'path';

import { defineConfig } from '@playwright/test';

import { config } from '../src/utils/config';

export default defineConfig({
  testDir: '../tests',
  outputDir: '../reports/test-results',
  fullyParallel: true,
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI === 'true' ? 1 : 0,
  workers: process.env.WORKERS ? parseInt(process.env.WORKERS) : 2,
  reporter: [
    ['junit', { outputFile: resolve(__dirname, '../reports/junit/results.xml') }],
    ['json', { outputFile: resolve(__dirname, '../reports/json/results.json') }],
    ['html', { outputFolder: resolve(__dirname, '../reports/html'), open: 'never' }],
  ],
  use: {
    actionTimeout: 0,
    baseURL: config.BASE_URL,
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});
