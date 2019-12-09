export default function parseIfInt(val: string): string | number {
  const hasNonDigits = /\D/.test(val);
  if (hasNonDigits) {
    return val;
  }

  return parseInt(val, 10);
}
