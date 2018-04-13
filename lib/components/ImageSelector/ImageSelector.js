import React, { Component } from 'react';

import Dialog from 'components/Dialog/Dialog';
import ClearableInput from 'components/ClearableInput/ClearableInput';
import FileUploader from 'components/FileUploader/FileUploader';
import { isString, convertToBase64 } from 'utils/common';
import MeikoFetch from 'utils/fetch';
import Urls from 'constants/urls';

const defaults = {
  imageFile: '',
  imageUrl: '',
  imageMessage: ''
};

class ImageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = defaults;

    this.assignDialogRef = this.assignDialogRef.bind(this);
    this.postToImgur = this.postToImgur.bind(this);
    this.handleImgurResponse = this.handleImgurResponse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleUserSelection = this.handleUserSelection.bind(this);
    this.exitImageSelector = this.exitImageSelector.bind(this);
  }

  assignDialogRef(element) {
    this.dialog = element;
  }

  postToImgur(url) {
    return image => MeikoFetch(url, 'POST', { image });
  }

  handleImgurResponse(result) {
    this.props.onChange({
      target: {
        name: this.props.name,
        type: 'text',
        value: result && result.success ? result.url : Urls.images.deadImage
      }
    });
  }

  handleSubmit(event) {
    const data = this.state.imageFile || this.state.imageUrl;
    const isStringData = isString(data);
    const imgurUrl = isStringData ? Urls.imgur.postUrl : Urls.imgur.postFile;

    const requestImgur = this.postToImgur(imgurUrl);
    this.exitImageSelector();

    if (isStringData) return requestImgur(data).then(this.handleImgurResponse);
    return convertToBase64(
      data,
      (function(selector) {
        return function() {
          requestImgur(this.result).then(selector.handleImgurResponse);
        };
      })(this)
    );
  }

  exitImageSelector() {
    this.setState(defaults);
    this.dialog.close();
  }

  handleOpenDialog() {
    this.dialog.showModal();
  }

  handleUserSelection(event) {
    const { name, value, files } = event.target;
    const hasFiles = !!files && files.length;
    this.setState({
      ...defaults,
      [name]: hasFiles ? files[0] : value,
      imageMessage: hasFiles ? value : ''
    });
  }

  render() {
    return (
      <div className="file-uploader">
        <div className="file-value">{this.props.url || 'Nothing selected'}</div>
        <button
          className="button ripple primary"
          type="button"
          onClick={this.handleOpenDialog}
        >
          Select image
        </button>
        <Dialog
          name="image-selection"
          title="Select an image"
          getDialogRef={this.assignDialogRef}
          actionText="Save"
          action={this.handleSubmit}
          isForm={false}
          hasBackdrop={false}
        >
          <ClearableInput
            name="imageUrl"
            label="Image Url"
            value={this.state.imageUrl}
            onChange={this.handleUserSelection}
          />

          <FileUploader
            name="imageFile"
            value={this.state.imageMessage}
            placeholder="upload image"
            onFileSelect={this.handleUserSelection}
          />
        </Dialog>
      </div>
    );
  }
}

export default ImageSelector;
