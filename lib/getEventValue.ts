import parseIfInt from './parseIfInt';

enum InputTypes {
  checkbox = 'checkbox',
  date = 'date',
  text = 'text'
}

const getEventValue = ({ type, checked, value }): string | number | boolean => {
  return type === InputTypes.checkbox
    ? checked
    : type === InputTypes.date || type === InputTypes.text
    ? value
    : parseIfInt(value);
};

export default getEventValue;
