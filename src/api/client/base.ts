import test from '@playwright/test';
import type { APIResponse } from '@playwright/test';
import { getDefaultAPIContext } from '../context/default.context';
import type { RequestHeaders } from '../../types/api';

export async function get(url: string, headers: RequestHeaders): Promise<APIResponse> {
  const context = await getDefaultAPIContext();

  return await test.step(`Sending GET request to URL "${url}"`, async () => {
    return await context.get(url, { headers });
  });
}

export async function post(
  url: string,
  body: string,
  headers: RequestHeaders,
): Promise<APIResponse> {
  const context = await getDefaultAPIContext();

  return await test.step(`Sending POST request to "${url}" with body "${body}"`, async () => {
    return await context.post(url, { headers, data: body });
  });
}

export async function put(
  url: string,
  body: string,
  headers: RequestHeaders,
): Promise<APIResponse> {
  const context = await getDefaultAPIContext();

  return await test.step(`Sending PUT request to "${url}" with body "${body}"`, async () => {
    return await context.put(url, { headers, data: body });
  });
}

export async function del(url: string, headers: RequestHeaders): Promise<APIResponse> {
  const context = await getDefaultAPIContext();

  return await test.step(`Sending DELETE request to URL "${url}"`, async () => {
    return await context.delete(url, { headers });
  });
}
