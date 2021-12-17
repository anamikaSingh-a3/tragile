import { Divider, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AssessmentIcon from '@material-ui/icons/Assessment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import { IWorkspace, IWorkspaceState } from 'tragile-workspace';
import { v4 as uuidv4 } from 'uuid';

import { activeWorkspace, resetActiveBoards } from '../../redux/action';
import { createWorkspaceThunk } from '../../redux/thunk/workspaceThunk/createWorkspaceThunk';
import { getAllWorkspacesThunk } from '../../redux/thunk/workspaceThunk/getAllWorkspaceThunk';
import { StyledButton } from '../../theme/uiComponents/Button';
import { StyledCloseIcon } from '../../theme/uiComponents/CloseIcon';
import { StyledDrawer } from '../../theme/uiComponents/Drawer';
import { StyledModal } from '../../theme/uiComponents/Modal';
import ModalContainer from '../common/Modal';
import { options } from './menuOptions';


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
    dispatch(resetActiveBoards())
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

  const handleMenuItemClick = (index: number) => {
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
          onClick={(event) => handleClickListItem(event)}
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
            onClick={() => handleMenuItemClick(index)}
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
