import React, { useState } from 'react'
import { useParams } from 'react-router'
import { StyledContainer } from '../theme/uiComponents/layout/Container'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { TextField } from '@material-ui/core'
import { StyledButton } from '../theme/uiComponents/Button'
import CloseIcon from '@material-ui/icons/Close'
import { IList } from '../../../backend/src/interface/listInterface';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createListThunk } from '../redux/thunk/createListThunk';

interface IParams {
  id: string
}

const CreateList: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [title, setTile] = useState<string>('')

  const { id } = useParams<IParams>()
  const dispatch = useDispatch()

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setTile('')
  }

  const handleButtonClick = () => {
    const requestBody: IList = {
      list_id: uuidv4(),
      title: title,
      board: id
    }
    dispatch(createListThunk(requestBody))
    handleClose()
  }

  return (
    <>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
        variant='contained'
        size="small"
      >
        Create List
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <TextField
            id='filled-secondary'
            placeholder='Add list title'
            variant='filled'
            color='secondary'
            value={title}
            onChange={e => setTile(e.target.value)}
            fullWidth
          />
        </MenuItem>
        <StyledButton
          variant='contained'
          color='primary'
          onClick={handleButtonClick}
          disabled={!title}
        >
          Create
        </StyledButton>
        <CloseIcon onClick={handleClose} />
      </Menu>
    </>
  )
}

export default CreateList
