import React from 'react'
import ReactDOM from 'react-dom'
import { Modal, ModelContent, ExitButton } from './styles'

const ModalComponent = ({ children, onClose }) => {
  return <>
    <Modal>
      <ModelContent>
        <ExitButton onClick={onClose}>✖</ExitButton>
        {children}
      </ModelContent>
    </Modal>
  </>
}

const ModalPortal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <ModalComponent onClose={onClose}>
      {children}
    </ModalComponent>,
    document.getElementById('root-modal')
  )
}

export default ModalPortal