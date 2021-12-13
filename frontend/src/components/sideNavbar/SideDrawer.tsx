import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router'
import { activeWorkspace } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { createWorkspaceThunk } from '../../redux/thunk/createWorkspaceThunk'
import {
  TextField,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core'
import AssessmentIcon from '@material-ui/icons/Assessment'
import AddIcon from '@material-ui/icons/Add'
import { StyledModal } from '../../theme/uiComponents/Modal'
import { StyledButton } from '../../theme/uiComponents/Button'
import { StyledDrawer } from '../../theme/uiComponents/Drawer'
import ModalContainer from '../common/Modal'
import { options } from './menuOptions'
import { getAllWorkspacesThunk } from '../../redux/thunk/getAllWorkspaceThunk'
import { IWorkspace, IWorkspaceState } from 'tragile-workspace'
import { StyledCloseIcon } from '../../theme/uiComponents/CloseIcon'
import { useLocation } from 'react-router-dom'


const SideDrawer: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [title, setTile] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [openModal, setOpenModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const workspaces = useSelector((state: IWorkspaceState) => state.workspaces)

  const handleClose = () => {
    setOpenModal(false)
    setTile('')
    setDescription('')
    setSelectedIndex(-1)
  }
  const onWorkspaceHandler = (workspace: IWorkspace) => {
    dispatch(activeWorkspace(workspace))
    history.push('/workspaceBoards')
  }

  const handleButtonClick = async () => {
    const requestBody: IWorkspace = {
      workspace_id: uuidv4(),
      title: title,
      type: options[selectedIndex],
      description: description,
    }
    dispatch(createWorkspaceThunk(requestBody))
    handleClose()
  }

  const handleClickListItem = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event: any, index: any) => {
    setSelectedIndex(index)
    setAnchorEl(null)
  }

  const handleMenuClose = () => {
    setSelectedIndex(-1)
    setAnchorEl(null)
  }

  const body = (
    <StyledModal>
      <TextField
        id='filled-secondary'
        placeholder='Add Workspace title'
        variant='filled'
        color='secondary'
        value={title}
        onChange={(e) => setTile(e.target.value)}
        fullWidth
      />
      <List component='nav' aria-label='WorkspaceType'>
        <ListItem
          button
          aria-haspopup='true'
          aria-controls='lock-menu'
          onClick={handleClickListItem}
        >
          <ListItemText
            primary='Workspace Type'
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id='lock-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      <TextField
        id='filled-secondary'
        placeholder='Add Workspace description'
        variant='outlined'
        color='secondary'
        multiline
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <StyledButton
        variant='contained'
        color='primary'
        onClick={handleButtonClick}
        disabled={!title || selectedIndex === -1}
      >
        Create Workspace
      </StyledButton>
      <StyledCloseIcon onClick={handleClose} />
    </StyledModal>
  )

  useEffect(() => {
    dispatch(getAllWorkspacesThunk())
  }, [dispatch])

  let location = useLocation()

  if(location.pathname==="/signIn" || location.pathname==="/signUp") {
    return null
  } else

  return (
    <>
      <StyledDrawer variant='permanent' anchor='left'>
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary='Workspace' />
            <ListItemIcon>
              <AddIcon onClick={() => setOpenModal(true)} />
            </ListItemIcon>
          </ListItem>
          {workspaces.length !== 0
            ? workspaces.map((array: IWorkspace) => (
              <ListItem
                key={array.workspace_id}
                onClick={() => onWorkspaceHandler(array)}
              >
                <ListItemIcon>
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText primary={array.title} />
              </ListItem>
            ))
            : 'There are no workspaces'}
        </List>
      </StyledDrawer>
      {openModal && <ModalContainer openModal={openModal} body={body} />}
    </>
  )
}

export default SideDrawer
