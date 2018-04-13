import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component } from 'react';

import Strings from 'constants/strings';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel() {
    this.props.cancelOptions.onCancel();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitOptions.onSubmit();
  }

  render() {
    const {
      id,
      className,
      name,
      title,
      submitOptions,
      cancelOptions
    } = this.props;
    const hasTitle = !!title;
    const renderCancel = !cancelOptions.hide;

    return (
      <div id={id} className={classNames('form-container', className)}>
        {hasTitle && <h4 className="form-title">{title}</h4>}
        <form
          name={name}
          noValidate=""
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          {this.props.children}
          <div className="button-group">
            <button type="submit" className="button ripple">
              {submitOptions.text || Strings.save}
            </button>
            {renderCancel && (
              <button
                type="button"
                className="button ripple"
                onClick={this.handleCancel}
              >
                {Strings.cancel}
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  submitOptions: PropTypes.object,
  cancelOptions: PropTypes.object
};

export default Form;
