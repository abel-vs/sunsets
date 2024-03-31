export function hexToNormalizedRGB(hex: string) {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, "");

  // Parse the hex string
  const bigint = parseInt(hex, 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;

  return [r, g, b];
}
