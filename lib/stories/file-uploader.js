import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FileUploader } from '../index';

const actions = {
  onFileSelect: action('file selected')
};

storiesOf('FileUploader', module).add('basic', () => {
  return <FileUploader name="file" value="" {...actions} />;
});