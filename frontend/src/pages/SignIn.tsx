import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { IUserState } from 'tragile-user';

import Copyright from '../components/common/Copyright';
import { resetUser } from '../redux/action/userActions/userActions';
import { signInThunk } from '../redux/thunk/userThunk/signInThunk';
import { StyledButton } from '../theme/uiComponents/Button';
import { StyledContainerUser } from '../theme/uiComponents/layout/Container';
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector((state: IUserState) => state.user.token)
  const signUpHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(signInThunk(email, password))
    if (user) history.push('/')
  }

  useEffect(() => {
    return () => {
      dispatch(resetUser())
    }
  }, [email, password, dispatch])

  return (
    <>
      <StyledContainerUser maxWidth='lg'>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <StyledPaperUser elevation={3} >
            <Typography component='h1' variant='h5'>
              Sign in
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='current-password'
              />
              <StyledButton
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                onClick={(e) => signUpHandler(e)}
              >
                Sign In
              </StyledButton>
              <Grid container>
                <Grid item>
                  <Button
                    type="submit"
                    color="primary"
                    onClick={() => {
                      history.push('/signUp')
                    }}
                  >
                    {'New User? Sign up'}
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
export default SignIn
