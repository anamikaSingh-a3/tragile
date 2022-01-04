import { Container, CssBaseline, Typography, Box } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router'
import { ILogoutState } from 'tragile-user';
import { logoutThunk } from '../redux/thunk/userThunk/logoutThunk';
import { StyledButton } from '../theme/uiComponents/Button'
import { StyledContainerUser } from '../theme/uiComponents/layout/Container'
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper'

const Home: React.FC = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const logout = useSelector((state: ILogoutState) => state.logout)

    const onSignUpHandler = () => {
        history.push('/sign')
    }

    const onSignInHandler = () => {
        history.push('/signIn')
    }
    const logoutHandler = () => {
        dispatch(logoutThunk())
        history.push('/signIn')
    }
    useEffect(() => {
        return () => {
            dispatch(logoutThunk())
        }
    }, [])
    return (
        <>
            <StyledContainerUser maxWidth='lg'>
                <Container component='main' maxWidth='xs'>
                    <CssBaseline />
                    <StyledPaperUser elevation={3} >
                        <Typography component='h1' variant='h5'>
                            Tragile Home Page
                        </Typography>
                        {
                            logout ? <Box>
                                <StyledButton onClick={logoutHandler}>Logout</StyledButton>
                            </Box> :
                        <Box>
                            <StyledButton onClick={onSignUpHandler}>SignUP</StyledButton>
                            <StyledButton onClick={onSignInHandler}>SignIn</StyledButton>
                        </Box>
                        }

                    </StyledPaperUser>
                </Container>
            </StyledContainerUser>
        </>
    )
}

export default Home