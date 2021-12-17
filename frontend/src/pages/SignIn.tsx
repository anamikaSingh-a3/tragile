import { Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Copyright from '../components/common/Copyright'
import { StyledButton } from '../theme/uiComponents/Button'
import { StyledContainerUser } from '../theme/uiComponents/layout/Container'
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper'
import { useDispatch, useSelector } from 'react-redux';
import { signInThunk } from '../redux/thunk/userThunk/signInThunk'
import { resetUser } from '../redux/action/userActions'
import { IUserState } from 'tragile-user'

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
  }, [email, password])

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
