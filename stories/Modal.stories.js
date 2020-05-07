import React from 'react'
import {action} from '@storybook/addon-actions'
import CustomModal from '../src/custom-modal/CustomModal'
import {boolean, withKnobs} from '@storybook/addon-knobs'

export default {
  title: 'Modal',
  component: CustomModal,
  decorators: [withKnobs]
};

export const Modal = () => <CustomModal isOpen={boolean('isOpen', true)} closeModal={action('Closed modal')}/>