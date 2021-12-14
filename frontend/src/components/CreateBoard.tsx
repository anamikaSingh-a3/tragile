import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TextField from '@material-ui/core/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { StyledModal } from '../theme/uiComponents/Modal'
import { StyledButton } from '../theme/uiComponents/Button'
import { createBoardThunk } from '../redux/thunk/createBoardThunk'
import ModalContainer from './common/Modal'
import Cards from './common/Card'
import { IActiveWorkspaceState } from 'tragile-workspace'
import { IBoard } from 'tragile-board'
import { StyledCloseIcon } from '../theme/uiComponents/CloseIcon'

const CreateBoard: React.FC= () => {
  const [openModal, setOpenModal] = useState(false)
  const [title, setTile] = useState<string>('')

  const dispatch = useDispatch()

  const activeWorkspace = useSelector(
    (state: IActiveWorkspaceState) => state.activeWorkspace
  )

  const handleClose = () => {
    setTile('')
    setOpenModal(false)
  }

  const handleButtonClick = () => {
    const requestBody: IBoard = {
      board_id: uuidv4(),
      title: title,
      workspaceId: activeWorkspace.workspace_id,
      visibility: 'public'
    }
    dispatch(createBoardThunk(requestBody))
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
        onChange={e => setTile(e.target.value)}
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
      <StyledCloseIcon onClick={() => handleClose()} />
    </StyledModal>
  )

  return (
    <>
      <div onClick={() => setOpenModal(true)}>
        <Cards title={'Create new Board'} />
      </div>
      {openModal && <ModalContainer openModal={openModal} body={body} />}
    </>
  )
}

export default CreateBoard
