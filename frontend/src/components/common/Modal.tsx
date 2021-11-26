import { Modal } from '@material-ui/core'

interface ModalContainerProps {
  openModal: boolean
  body: any
}

const ModalContainer = (props: ModalContainerProps) => {
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
