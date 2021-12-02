import { Button, List, Menu, MenuItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { StyledButton } from '../theme/uiComponents/Button'
import { StyledList, StyledListItem } from '../theme/uiComponents/List'
import CloseIcon from '@material-ui/icons/Close'
import {
  IList
} from '../redux/interfaces'
import { useDispatch } from 'react-redux'
import { addActiveList } from '../redux/action'

interface IBoardListProps {
  list: IList
}

const BoardList: React.FC<IBoardListProps> = (props: IBoardListProps) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [title, setTile] = useState<string>('')

  const dispatch = useDispatch()

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setTile('')
  }

  return (
    <StyledList onClick={() => dispatch(addActiveList(props.list))}>
      <List component='nav' aria-label='main mailbox folders'>
        <StyledListItem button disableRipple>
          List Title: {props.list.title}
          <Button
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
            variant='contained'
          >
            Create Card
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
                placeholder='Add card title'
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
              disabled={!title}
            >
              Create card
            </StyledButton>
            <CloseIcon onClick={handleClose} />
          </Menu>
        </StyledListItem>
      </List>
    </StyledList>
  )
}

export default BoardList
