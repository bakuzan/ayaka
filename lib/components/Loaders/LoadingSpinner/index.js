import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './LoadingSpinner.scss';

const cx = classNames.bind(styles);

class LoadingSpinner extends Component {
  render() {
    return (
      <div className={cx('loader', 'meiko-spinner', this.props.size)}>
        <svg className={cx('circular')} viewBox="25 25 50 50">
          <circle
            className={cx('path')}
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    );
  }
}

LoadingSpinner.propTypes = {
  size: PropTypes.string
};

export default LoadingSpinner;