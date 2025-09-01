import { request } from 'playwright/test';

import { servicesConfig } from '../../utils/config/services';

export const getDefaultAPIContext = async () => {
  return await request.newContext({
    baseURL: servicesConfig.BASE_URL,
  });
};
