export function createBasicHeaders(contentType = 'application/json'): Record<string, string> {
  return {
    'Content-Type': contentType,
  };
}
