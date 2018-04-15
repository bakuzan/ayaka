import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './RatingControl.scss';

const cx = classNames.bind(styles);

class RatingControl extends Component {
  constructor(props) {
    super(props);

    this.maximum = 10;
    this.iterator = Array(this.maximum).fill(null);
    this.isReadOnly = !props.onChange;
  }

  componentDidUpdate(prevProps) {
    this.isReadOnly = !this.props.onChange;
  }

  handleChange(event) {
    if (this.isReadOnly) return;
    const { value: valueString, type } = event.target;
    const value = Number(valueString);
    this.props.onChange({
      target: {
        value: this.props.value === value ? 0 : value,
        type,
        name: this.props.name
      }
    });
  }

  ratingColouriser(value) {
    if (value < 4) return 'low';
    if (value < 7) return 'average';
    if (value < 9) return 'good';
    return 'great';
  }

  renderSelectors() {
    return this.iterator.map((item, index) => {
      const value = index + 1;
      const colourise = this.ratingColouriser(value);
      const hoverInfo = `${value}/${this.maximum}`;
      const highlight =
        this.props.value < value
          ? ''
          : this.props.value > value ? ' past' : ' selected';
      return (
        <label
          key={index}
          className={`rating-control-option ${colourise}${highlight}`}
          title={hoverInfo}
        >
          <input
            type="radio"
            name={`${this.props.name}-${value}`}
            value={value}
            checked={value === this.props.value}
            onChange={() => null}
            onClick={e => this.handleChange(e)}
          />
        </label>
      );
    });
  }

  render() {
    const ratingSelectors = this.renderSelectors();

    return (
      <div
        className={cx('rating-control', {
          'read-only': this.isReadOnly
        })}
        role="radiogroup"
      >
        {ratingSelectors}
        <label className={cx('rating-control-label')}>{this.props.label}</label>
      </div>
    );
  }
}

RatingControl.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onChange: PropTypes.func
};

export default RatingControl;
