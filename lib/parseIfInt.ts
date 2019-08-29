export default function parseIfInt(val: string): string | number {
  const maybeInt = parseInt(val, 10);
  const hasNonDigits = /\D/.test(val);
  return maybeInt === 0 || (!!maybeInt && !hasNonDigits) ? maybeInt : val;
}
