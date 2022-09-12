/* eslint-disable id-denylist */
import parseIfInt from './parseIfInt';

enum InputTypes {
  Checkbox = 'checkbox',
  Date = 'date',
  Number = 'number',
  Text = 'text',
  Url = 'url'
}

const valueTypes = [InputTypes.Date, InputTypes.Text, InputTypes.Url];

export default function getEventValue(
  target: Partial<{ type: string; checked: boolean; value: string }>
): string | number | boolean {
  const { type, checked, value } = target as HTMLInputElement;

  if (type === InputTypes.Checkbox) {
    return checked;
  }

  if (valueTypes.includes(type as InputTypes)) {
    return value;
  }

  return parseIfInt(value);
}
