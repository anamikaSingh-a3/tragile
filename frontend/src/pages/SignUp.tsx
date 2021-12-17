import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { StyledContainerUser } from '../theme/uiComponents/layout/Container'
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper'
import { StyledButton } from '../theme/uiComponents/Button'
import { useHistory } from 'react-router'
import Copyright from '../components/common/Copyright'
import { useDispatch, useSelector } from 'react-redux';
import { stringify } from 'querystring'
import { signUpThunk } from '../redux/thunk/userThunk/signUpThunk'
import { resetToken } from '../redux/action/userActions'
import { ITokenState } from 'tragile-user'


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
    console.log("token", token)
    if (token)
      history.push('/signIn')
  }

  useEffect(() => {
    return () => {
      dispatch(resetToken())
    }
  }, [name, email, password])

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
              {/* <Typography>
                By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy.
              </Typography> */}
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
