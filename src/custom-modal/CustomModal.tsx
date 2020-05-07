import React, {FunctionComponent} from 'react'
import {Button, Dialog} from '@material-ui/core'
import SlideUpTransition from './SlideUpTransition'
import styles from './CustomModal.module.css'

type CustomModalProps = {
  isOpen: boolean
  closeModal: () => void
}

const CustomModal: FunctionComponent<CustomModalProps> = (
    {isOpen, closeModal}: CustomModalProps
) => {

  const [isKitty, setKitty] = React.useState(false)

  return (
      <Dialog
          open={isOpen}
          fullWidth={true}
          maxWidth={'lg'}
          TransitionComponent={SlideUpTransition}
          aria-labelledby="Modal">
        <div className={styles.container}>
          {isKitty && <img onClick={closeModal} src="https://i.imgur.com/zwGvAQn.png"></img>}
          {!isKitty &&
          <>
              <span>This is an example of a modal.</span>
              <span>Here’s some text.</span>
              <p>You are looking at an example of a custom modal. It has some styling <br/>
                  and features so you can see how it looks.</p>
              <Button onClick={closeModal}
                      className={styles.button}
                      variant="contained"
                      color="primary">
                  Close Modal
              </Button>
              <span onClick={() => setKitty(true)}>Leer en Español</span>
          </>
          }
        </div>
      </Dialog>
  )
}

export default CustomModal
