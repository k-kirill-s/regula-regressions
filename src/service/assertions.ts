import { expect, test } from '@playwright/test';

export async function expectToBe(
  actual: unknown,
  expected: unknown,
  description: string,
): Promise<void> {
  await test.step(`Checking that "${description}" is being "${JSON.stringify(expected)}"`, async () => {
    expect(actual).toBe(expected);
  });
}

export async function expectToEqual(
  actual: unknown,
  expected: unknown,
  description: string,
): Promise<void> {
  await test.step(`Checking that "${description}" is equal to "${JSON.stringify(expected)}"`, async () => {
    expect(actual).toEqual(expected);
  });
}

export async function expectToLess(
  actual: number,
  expected: number,
  description: string,
): Promise<void> {
  await test.step(`Checking that "${description}" is less than "${JSON.stringify(expected)}"`, async () => {
    expect(actual).toBeLessThan(expected);
  });
}
