import {
  Box,
  Container,
  CssBaseline,
  TextField,
  Typography
} from '@material-ui/core'
import React, { useState } from 'react'
import Copyright from '../components/common/Copyright'
import { StyledButton } from '../theme/uiComponents/Button'
import { StyledContainerUser } from '../theme/uiComponents/layout/Container'
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper'
import { useDispatch } from 'react-redux'
import { sendEmailThunk } from '../redux/thunk/userThunk/sendEmailThunk'

const EmailVerification = () => {
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')

  const [message, setMessage] = useState<any>('')
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useDispatch()
  const signHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setLoading(true)
    const response = await dispatch(sendEmailThunk(email, name))

    console.log('Response', response)
    setMessage(response)
    setLoading(false)
  }
  return (
    <>
      <StyledContainerUser maxWidth='lg'>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <StyledPaperUser elevation={3}>
            {!loading ? (
              <>
                {message}
                <form noValidate>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='name'
                    label='Name'
                    placeholder='Enter name'
                    name='name'
                    autoComplete='name'
                    value={name}
                    onChange={e => {
                      setName(e.target.value)
                      setMessage('')
                    }}
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
                    onChange={e => {
                      setEmail(e.target.value)
                      setMessage('')
                    }}
                    autoFocus
                  />
                  <StyledButton
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    onClick={e => signHandler(e)}
                    disabled={!email}
                  >
                    Send Verification
                  </StyledButton>
                </form>
              </>
            ) : (
              <> loading..</>
            )}
          </StyledPaperUser>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </StyledContainerUser>
    </>
  )
}
export default EmailVerification
