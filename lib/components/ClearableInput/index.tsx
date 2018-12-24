import classNames from 'classnames';
import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Button } from '../Button';
import Icons from '../../constants/icons';
import { debounce } from '../../utils';
import './ClearableInput.scss';

class ClearableInput extends React.Component<IClearableInputProps, any> {
  static defaultProps = {
    name: 'search',
    label: 'search',
    type: 'text'
  };

  static propTypes = {
    clearInputButtonClass: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    maxLength: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func
  };

  private inputField = null;

  constructor(props: IClearableInputProps) {
    super(props);

    this.clearAndFocusInput = this.clearAndFocusInput.bind(this);
  }

  clearAndFocusInput() {
    this.props.onChange({ target: { name: this.props.name, value: '' } });
    debounce(() => this.inputField.focus(), 100);
  }

  render() {
    const {
      className,
      clearInputButtonClass,
      type,
      label,
      name,
      value,
      maxLength,
      onChange,
      ...props
    } = this.props;
    const isTextInput = type === 'text';
    const hasMaxNumber = type === 'number' && !isNaN(props.max);
    const notClearable = !isTextInput;

    return (
      <div
        className={classNames(
          className,
          'clearable-input',
          'has-float-label',
          'input-container',
          {
            'not-clearable': notClearable
          }
        )}
      >
        <input
          ref={(input) => (this.inputField = input)}
          placeholder=" "
          autoComplete="off"
          type={type}
          aria-label={label}
          name={name}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
          {...props}
        />
        <label htmlFor={name}>{label}</label>
        {!!value &&
          isTextInput && (
            <Button
              className={classNames('clear-input', clearInputButtonClass)}
              btnSize="small"
              icon={Icons.cross}
              onClick={this.clearAndFocusInput}
            />
          )}
        {(!!maxLength || hasMaxNumber) && (
          <span className={classNames('clearable-input-count')}>
            {maxLength && `${value.length}/${maxLength}`}
            {hasMaxNumber && `out of ${props.max || '?'}`}
          </span>
        )}
      </div>
    );
  }
}

export default ClearableInput;