import CustomDropzone from '../src/custom-dropzone/CustomDropzone'
import React from 'react'
import {action} from '@storybook/addon-actions'

export default {
  title: 'Dropzone',
  component: CustomDropzone,
};

export const Dropzone = () => <CustomDropzone existingFiles={[]}
                                                    onAcceptedFiles={action('Files Accepted!')}
                                                    onRemoveFile={action('File Removed!')}/>;