import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ITokenState } from 'tragile-user';

import Copyright from '../components/common/Copyright';
import { resetToken } from '../redux/action/userActions/userActions';
import { signUpThunk } from '../redux/thunk/userThunk/signUpThunk';
import { StyledButton } from '../theme/uiComponents/Button';
import { StyledContainerUser } from '../theme/uiComponents/layout/Container';
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper';


const SignUp: React.FC = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const token = useSelector((state: ITokenState) => state.token)
  const signUpHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(signUpThunk({
      name: name,
      email: email,
      password: password
    }))
    if (token)
      history.push('/signIn')
  }

  useEffect(() => {
    return () => {
      dispatch(resetToken())
    }
  }, [name, email, password, dispatch])

  return (
    <>
      <StyledContainerUser maxWidth='lg'>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <StyledPaperUser elevation={3}>
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
                label='Enter Name'
                placeholder='Enter name'
                name='name'
                autoComplete='name'
                value={name}
                onChange={e => setName(e.target.value)}
                autoFocus
              />
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
                onChange={e => setEmail(e.target.value)}
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
