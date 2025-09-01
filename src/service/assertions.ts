import { expect, test } from '@playwright/test';

export async function expectToEqual(
  actual: unknown,
  expected: unknown,
  description: string,
): Promise<void> {
  await test.step(`Checking that "${description}" is equal to "${String(expected)}"`, async () => {
    expect(actual).toEqual(expected);
  });
}
