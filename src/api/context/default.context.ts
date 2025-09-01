import { request } from 'playwright/test';

import { config } from '../../utils/config';

export const getDefaultAPIContext = async () => {
  return await request.newContext({
    baseURL: config.BASE_URL,
  });
};
