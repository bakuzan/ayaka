import classNames from 'classnames/bind';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './FileUploader.scss';

const cx = classNames.bind(styles);

const displayFileName = str => str.slice(0).replace(/^.*\\/g, '');

class FileUploader extends Component {
  handleUserInput(event) {
    event.stopPropagation();
    this.props.onFileSelect(event);
  }

  handleFileUpload() {
    this.fileInput.click();
  }

  render() {
    const { name, value, placeholder } = this.props;

    return (
      <div className={cx('file-uploader')}>
        <input
          ref={element => (this.fileInput = element)}
          type="file"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={e => this.handleUserInput(e)}
        />
        <div className={cx('file-value')}>
          {displayFileName(value) || 'Nothing selected'}
        </div>
        <button
          className="button ripple primary"
          type="button"
          onClick={() => this.handleFileUpload()}
        >
          {placeholder}
        </button>
      </div>
    );
  }
}

FileUploader.defaultProps = {
  placeholder: 'upload'
};

FileUploader.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onFileSelect: PropTypes.func.isRequired
};

export default FileUploader;
