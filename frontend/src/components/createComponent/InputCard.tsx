import React, { useState } from 'react'
import { InputBase, IconButton, Box } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import { useDispatch, useSelector } from 'react-redux'
import { IActiveListState, IList } from 'tragile-list'
import { v4 as uuidv4 } from 'uuid'
import createCardThunk from '../../redux/thunk/createCardThunk'
import { ICard } from 'tragile-card'
import { createListThunk } from '../../redux/thunk/createListThunk'
import { IActiveBoardState } from 'tragile-board'
import { StyledButton } from '../../theme/uiComponents/Button'
import { StyledPaper } from '../../theme/uiComponents/layout/Paper'

interface InputCardProps {
  setOpen: any
  listId: string
  type: string
}

const InputCard: React.FC<InputCardProps> = (props: InputCardProps) => {
  const activeList = useSelector((state: IActiveListState) => state.activeList)
  const activeBoard = useSelector(
    (state: IActiveBoardState) => state.activeBoard
  )
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')

  const handleOnChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setTitle(e.target.value)
  }

  const handleBtnConfirm = (listId: string) => {
    if (props.type === 'card') {
      const requestBody: ICard = {
        card_id: uuidv4(),
        title: title,
        list: listId
      }
      dispatch(createCardThunk(requestBody))
      setTitle('')
    } else {
      const requestBody: IList = {
        list_id: uuidv4(),
        title: title,
        board_id: activeBoard.board_id
      }
      dispatch(createListThunk(requestBody))
      setTitle('')
    }
  }

  return (
    <>
      <Box component='span'>
        <StyledPaper>
          <InputBase
            onChange={handleOnChange}
            multiline
            fullWidth
            value={title}
            placeholder={
              props.type === 'card'
                ? 'Enter card title..'
                : 'Enter list title...'
            }
          />
        </StyledPaper>
        <StyledButton
          onClick={() => handleBtnConfirm(activeList.list_id)}
          disabled={!title}
        >
          {props.type === 'card' ? 'Add Card' : 'Add List'}
        </StyledButton>
        <IconButton onClick={() => props.setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </Box>
    </>
  )
}

export default InputCard
