import React from 'react'
import CustomModal from './CustomModal'
import { render } from '@testing-library/react'

describe('CustomModal', () => {
  it('renders', () => {
    render(<CustomModal isOpen={true} closeModal={() => {}}/>)
  })
})