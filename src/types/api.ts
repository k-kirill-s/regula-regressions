import type { APIRequestContext } from 'playwright/test';

export interface APIClient {
  context: APIRequestContext;
}

export type RequestHeaders = Record<string, string>;
