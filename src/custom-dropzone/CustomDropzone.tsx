import React, {createRef, FunctionComponent, RefObject} from 'react'
import Dropzone, {DropzoneRef} from 'react-dropzone'
import styles from './CustomDropzone.module.css'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import DescriptionIcon from '@material-ui/icons/Description'
import DeleteIcon from '@material-ui/icons/Delete'
import { IconButton } from '@material-ui/core'

type CustomDropzoneProps = {
  existingFiles: File[]
  onAcceptedFiles(acceptedFiles: File[]): void,
  onRemoveFile(fileIndexToRemove:number):void
}

const CustomDropzone: FunctionComponent<CustomDropzoneProps> = (
    {existingFiles, onAcceptedFiles, onRemoveFile}: CustomDropzoneProps
) => {
  const dropzoneRef: RefObject<DropzoneRef> = createRef()

  const openDialog = () => {
    // Note that the ref is set async,
    // so it might be null at some point
    if (dropzoneRef.current) {
      dropzoneRef.current.open()
    }
  }

  return (
      <Dropzone ref={dropzoneRef}
                noClick
                onDropAccepted={acceptedFiles => onAcceptedFiles(acceptedFiles)}>
        {({getRootProps, getInputProps}) => (
            <section className={styles.dropzone}>
              <div {...getRootProps()} className={styles.droppableArea}>
                <input {...getInputProps()} />
                <CloudUploadIcon fontSize={"large"}/>
                <span>Drag and drop files</span>
                <button type="button" onClick={openDialog}>Browse</button>

                <div className={styles.acceptedFiles}>
                  {existingFiles.map((file, index) => (
                      <div key={file.name} className={styles.acceptedFile}>
                        <DescriptionIcon/>
                        <div className={styles.filenameAndRemove}>
                          <span>{file.name}</span>
                          <IconButton onClick={() => onRemoveFile(index)}>
                            <DeleteIcon className={styles.deleteButton}/>
                          </IconButton>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </section>
        )}
      </Dropzone>
  )
}

export default CustomDropzone