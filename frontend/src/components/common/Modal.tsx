import { Modal } from '@material-ui/core';
import React from 'react';

interface ModalContainerProps {
  openModal: boolean
  body: JSX.Element
}

const ModalContainer: React.FC<ModalContainerProps> = (props: ModalContainerProps) => {
  return (
    <>
      <Modal
        open={props.openModal}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {props.body}
      </Modal>
    </>
  )
}

export default ModalContainer
