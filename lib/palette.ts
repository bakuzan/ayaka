import hexToHsl from './utils/hexToHsl';
import hslToHex from './utils/hslToHex';

function adjustLightness(deg: number, col: string): string {
  const hsla = hexToHsl(col);
  const l = hsla[2] + deg / 100;
  hsla[2] = Math.max(Math.min(l, 100), 0);
  return hslToHex(hsla);
}

export function lighten(percent: number, hex: string): string {
  return adjustLightness(percent, hex);
}

export function darken(percent: number, hex: string): string {
  return adjustLightness(-percent, hex);
}
