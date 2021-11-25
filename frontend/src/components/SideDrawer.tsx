import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AssessmentIcon from '@material-ui/icons/Assessment'
import AddIcon from '@material-ui/icons/Add'
import { useHistory } from 'react-router'
import { Modal, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { activeWorkspace, addWrokspace } from '../redux/action'
import { IWorkspace, IWorkspaceState } from '../redux/interfaces'
import { StyledModalContainer } from '../style/styledComponents/ModalContainer'
import { StyledButton } from '../style/styledComponents/Button'
import { StyledDrawer } from '../style/styledComponents/Drawer'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import CloseIcon from '@material-ui/icons/Close'

const SideDrawer: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [title, setTile] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [openModal, setOpenModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const options = [
    'Education',
    'Human Rights',
    'Small Business',
    'Operations',
    'Engineering IT',
    'Sales CRM',
    'marketing',
    'Other',
  ]

  const workspace = useSelector((state: IWorkspaceState) => state.workspaces)

  const handleClose = () => {
    setOpenModal(false)
    setTile('')
    setDescription('')
    setSelectedIndex(-1)
  }
  const onWorkspaceHandler = (workspace: IWorkspace) => {
    console.log('workspace.id', workspace)
    const active = dispatch(activeWorkspace(workspace))
    history.push('/board')
    console.log('Active', active.payload.title)
  }

  const handleButtonClick = () => {
    dispatch(
      addWrokspace({
        id: uuidv4(),
        title: title,
        type: options[selectedIndex],
        description: description,
        board: [],
      })
    )
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
    <StyledModalContainer>
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
        variant='filled'
        color='secondary'
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
      <CloseIcon onClick={handleClose} />
    </StyledModalContainer>
  )

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
          {workspace.map((workspace: IWorkspace) => (
            <ListItem
              key={workspace.id}
              onClick={() => onWorkspaceHandler(workspace)}
            >
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={workspace.title} />
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
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

export default SideDrawer
