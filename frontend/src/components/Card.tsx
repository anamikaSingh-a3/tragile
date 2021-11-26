import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Modal from '@material-ui/core/Modal'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { addBoard } from '../redux/action'
import { IActiveWorkspaceState, IBoard } from '../redux/interfaces'
import store from '../redux/store'
import { StyledCard } from '../style/styledComponents/Card'
import { StyledModal } from '../style/styledComponents/Modal'
import { StyledButton } from '../style/styledComponents/Button'
import CloseIcon from '@material-ui/icons/Close'
import { createBoardThunk } from '../redux/thunk/createBoardThunk'

const Cards: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const [title, setTile] = useState<string>('')

  const dispatch = useDispatch()
  // const activeWorkspace = useSelector(
  //   (state: IActiveWorkspaceState) => state.activeWorkspace
  // )

  const activeWorkspace = useSelector(
    (state: IActiveWorkspaceState) => state.activeWorkspace
  )
  console.log('activeWorkspace', activeWorkspace)
  console.log('activeWorkspaceID', activeWorkspace.workspace_id)

  const handleClose = () => {
    setOpenModal(false)
    setTile('')
  }

  const handleButtonClick = () => {
    const requestBody: IBoard = {
      id: uuidv4(),
      title: title,
      workspaceId: activeWorkspace.workspace_id,
      visibility: 'public',
    }
    dispatch(
      // addBoard(
      //   {
      //     id: uuidv4(),
      //     title: title,
      //     workspaceId: activeWorkspace.id,
      //   }
      //   // store.getState()
      // )
      createBoardThunk(requestBody)
    )
    handleClose()
  }

  const body = (
    <StyledModal>
      <h2 id='simple-modal-title'>{activeWorkspace.title}</h2>
      <TextField
        id='filled-secondary'
        placeholder='Add board title'
        variant='filled'
        color='secondary'
        value={title}
        onChange={(e) => setTile(e.target.value)}
        fullWidth
      />
      <StyledButton
        variant='contained'
        color='primary'
        onClick={handleButtonClick}
        disabled={!title}
      >
        Create Board
      </StyledButton>
      <CloseIcon onClick={handleClose} />
    </StyledModal>
  )

  return (
    <>
      <StyledCard onClick={() => setOpenModal(true)}>
        <CardActionArea>
          <CardContent>Create new Board</CardContent>
        </CardActionArea>
      </StyledCard>
      {openModal && (
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
        >
          {body}
        </Modal>
      )}
    </>
  )
}

export default Cards
