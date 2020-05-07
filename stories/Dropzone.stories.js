import CustomDropzone from '../src/custom-dropzone/CustomDropzone'
import React from 'react'
import {action} from '@storybook/addon-actions'

export default {
  title: 'Dropzone',
  component: CustomDropzone,
};

export const Dropzone = () => {
  let [files, setFiles] = React.useState([])

  const handleAcceptedFiles = (newFiles) => {
    const aggregatedFiles = files.concat(newFiles)
    setFiles(aggregatedFiles)
    action('Files accepted:')(newFiles)
  }

  const handleRemovedFile = (fileIndexToRemove) => {
    const remainingFiles = [...files]
    remainingFiles.splice(fileIndexToRemove, 1)
    setFiles(remainingFiles)
    action('File removed at index:')(fileIndexToRemove)
  }

  return <CustomDropzone existingFiles={files}
                         onAcceptedFiles={handleAcceptedFiles}
                         onRemoveFile={handleRemovedFile}/>
};