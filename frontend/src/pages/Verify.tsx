import {
  Box,
  Button,
  Container,
  CssBaseline,
  Typography
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router'
import { IUserTokenState } from 'tragile-user'
import Copyright from '../components/common/Copyright'
import { verifyEmailThunk } from '../redux/thunk/userThunk/verifyEmailThunk'
import { StyledContainerUser } from '../theme/uiComponents/layout/Container'
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper'

interface IParams {
  userToken: string
}

const Verify: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(true)
  const dispatch = useDispatch()
  const history = useHistory()
  const { userToken } = useParams<IParams>()
  const email = useSelector((state: IUserTokenState) => state.userToken.email)
  const name = useSelector((state: IUserTokenState) => state.userToken.name)

  useEffect(() => {
    const response = async () => {
      const payload = dispatch(verifyEmailThunk(userToken))
      if (payload !== undefined) {
        setLoading(false)
      } else setLoading(true)
    }
    response()
  }, [userToken, dispatch])

  return (
    <>
      <StyledContainerUser maxWidth='lg'>
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
                  <h1>Verify email again</h1>
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
