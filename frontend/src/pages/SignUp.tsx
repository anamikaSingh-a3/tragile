import { Box, Button, Container, CssBaseline, Grid, List, ListItem, ListItemText, Menu, MenuItem, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import { v4 as uuidv4 } from 'uuid';

import { ITokenState, IUserState, IMessageState } from 'tragile-user';


import Copyright from '../components/common/Copyright';
import { resetToken } from '../redux/action/userActions/userActions';
import { signUpThunk } from '../redux/thunk/userThunk/signUpThunk';
import { StyledButton } from '../theme/uiComponents/Button';
import { StyledContainerUser } from '../theme/uiComponents/layout/Container';
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper';
import { SECRET } from '../constants'
import ModalContainer from '../components/common/Modal';
import { StyledModal } from '../theme/uiComponents/Modal';
import { options } from '../components/sideNavbar/menuOptions';
import { StyledCloseIcon } from '../theme/uiComponents/CloseIcon';
import { createWorkspaceThunk } from '../redux/thunk/workspaceThunk/createWorkspaceThunk';
import { IWorkspace } from 'tragile-workspace';
import { signInThunk } from '../redux/thunk/userThunk/signInThunk';

interface IParams {
  email: string,
  name: string
}



const SignUp: React.FC = () => {
  const history = useHistory()
  const [title, setTile] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const { email, name } = useParams<IParams>()
  const [openModal, setOpenModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  console.log("PAYLOAD", email, name)
  // const [name, setName] = useState('')
// const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  // const message = useSelector((state: IMessageState) => state.responseMessage.message ? state.responseMessage.message : '')
  const user = useSelector((state: IUserState) => state.user.userData ? state.user.userData[0].user_id : 1)

  const token = useSelector((state: ITokenState) => state.token)

  const handleClose = () => {
    setOpenModal(false)
    setTile('')
    setDescription('')
    setSelectedIndex(-1)
  }
  const handleMenuClose = () => {
    setSelectedIndex(-1)
    setAnchorEl(null)
  }

  const handleClickListItem = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index)
    setAnchorEl(null)
  }
  const handleButtonClick = async () => {
    const requestBody: IWorkspace = {
      workspace_id: uuidv4(),
      title: title,
      type: options[selectedIndex],
      description: description,
      created_by: user ? user : 1
    }
    dispatch(createWorkspaceThunk(requestBody))
    handleClose()
    history.push('/')
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

  const signUpHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setLoading(true)
    const response = await dispatch(signUpThunk({
      name: name,
      email: email,
      password: password
    }))
    // alert(token)
    if (response !== null) {
      console.log("message", token.length)
      setLoading(false)
      if (!token.length) {
        setOpenModal(true)
        dispatch(signInThunk(email, password))
      }
      else {
        alert("User already exists, please login")
        history.push('/signIn')

      }
    }
  }

// const userEmail = jwt.verify(emailToken, SECRET as string)
// console.log("userEmail", userEmail)

  // useEffect(() => {
  //   return () => {
  //     dispatch(resetToken())
  //   }
  // }, [])

  return (
    <>
      <StyledContainerUser maxWidth='lg'>
        {openModal && <ModalContainer openModal={openModal} body={body} />}
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <StyledPaperUser elevation={3}>
            {!loading ?
              <>
            <Typography component='h1' variant='h5'>
              Sign up for your account
            </Typography>
            <form noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                placeholder='Enter email'
                name='email'
                autoComplete='email'
                value={email}
                // onChange={e => setEmail(e.target.value)}
                disabled={true}
                autoFocus
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Enter Name'
                placeholder='Enter name'
                name='name'
                autoComplete='name'
                value={name}
                // onChange={e => setName(e.target.value)}
                disabled={true}
                autoFocus
              />

              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete='current-password'
              />
              <StyledButton
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                onClick={e => signUpHandler(e)}
              >
                Sign Up
              </StyledButton>
              <Grid container>
                <Grid item>
                  <Button
                    type='submit'
                    color='primary'
                    onClick={() => {
                      history.push('/signIn')
                    }}
                  >
                    {'Already a User? Sign in'}
                  </Button>
                </Grid>
              </Grid>
            </form>
              </>
              : <>loading...</>
            }
          </StyledPaperUser>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </StyledContainerUser>

    </>
  )
}
export default SignUp
