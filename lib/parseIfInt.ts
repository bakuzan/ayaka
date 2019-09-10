export default function parseIfInt(val: string): string | number {
  const hasNonDigits = /\D/.test(val);
  if (hasNonDigits) {
    return val;
  }

  const maybeInt = parseInt(val, 10);
  return maybeInt === 0 || !!maybeInt ? maybeInt : val;
}
