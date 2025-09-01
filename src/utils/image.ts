import * as fs from 'fs';

export function createImageBase64(filePath: string): string {
  const buf = fs.readFileSync(filePath);
  const base64 = buf.toString('base64');
  return base64;
}
