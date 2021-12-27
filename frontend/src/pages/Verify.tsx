import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router'
import { IUserState, IUserToken, IUserTokenState } from 'tragile-user'
import Copyright from '../components/common/Copyright'
import { verifyEmailThunk } from '../redux/thunk/userThunk/verifyEmailThunk'
import { StyledButton } from '../theme/uiComponents/Button'
import { StyledContainerUser } from '../theme/uiComponents/layout/Container'
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper'

interface IParams {
  userToken: string

}

const Verify: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(true)
  // const [email, setEmail] = useState<any>()
  const dispatch = useDispatch()
  const history = useHistory()
  const { userToken } = useParams<IParams>()
  const email = useSelector((state: IUserTokenState) => state.userToken.email)
  const name = useSelector((state: IUserTokenState) => state.userToken.name)

  // console.log("user", user)

  useEffect(() => {
    const response = async () => {
      const payload = dispatch(verifyEmailThunk(userToken))

      console.log('payload', payload)
      if (payload !== undefined) {
        setLoading(false)
        // setEmail(payload)
        // setPayload(payload)
      } else setLoading(true)
    }
    response()
  }, [dispatch])

  return (
    <>
      <StyledContainerUser maxWidth='lg'>
        {/* <h1>Verify Page</h1> */}
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <StyledPaperUser elevation={3}>
            {!loading ? (
              <>
                <Typography component='h1' variant='h5'>
                  Email has been verified
                </Typography>
                <Button onClick={() => history.push(`/signUp/${email}/${name}`)}>
                  proceed to continue
                </Button>
              </>
            ) : (
              <>
                <h1>Token expired</h1>
              </>
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
export default Verify
