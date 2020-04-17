export default function parseIfInt(val: string): string | number {
  const hasNonDigits = /\D/.test(val);
  if (hasNonDigits) {
    return val;
  }

  const num = parseInt(val, 10);
  return isNaN(num) ? val : num;
}
