import { Box, Container, CssBaseline, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { ILogoutState } from 'tragile-user'
import SideDrawer from '../components/sideNavbar/SideDrawer'
import { StyledContainer, StyledContainerUser } from '../theme/uiComponents/layout/Container'
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper'
import { logoutAction } from '../redux/action/userActions/userActions';
import { StyledButton } from '../theme/uiComponents/Button'
import { useHistory } from 'react-router';

const Dashboard: React.FC = () => {
    const history = useHistory()
    const logout = useSelector((state: ILogoutState) => state.logout)

    const onSignUpHandler = () => {
        history.push('/sign')
    }

    const onSignInHandler = () => {
        history.push('/signIn')
    }
    return (
        <>
            {logout ? <>
                <SideDrawer />
                <StyledContainer maxWidth='lg'>
                    <StyledContainerUser maxWidth='lg'>
                        <Container component='main' maxWidth='xs'>
                            <CssBaseline />
                            <StyledPaperUser elevation={3} >
                                <Typography component='h1' variant='h5'>
                                    Dashboard
                                </Typography>
                            </StyledPaperUser>
                        </Container>
                    </StyledContainerUser>
                </StyledContainer>
            </> : <>
                <StyledContainerUser maxWidth='lg'>
                    <Container component='main' maxWidth='xs'>
                        <CssBaseline />
                        <StyledPaperUser elevation={3} >
                            <Typography component='h1' variant='h5'>
                                Please login or sign up..
                                    <StyledButton onClick={() => history.push('/')}>
                                    Go to gome
                                </StyledButton>
                                    {/* <Box>
                                        <StyledButton onClick={onSignUpHandler}>SignUP</StyledButton>
                                        <StyledButton onClick={onSignInHandler}>SignIn</StyledButton>
                                    </Box> */}
                            </Typography>
                        </StyledPaperUser>
                    </Container>
                </StyledContainerUser>

            </>}
        </>
    )
}

export default Dashboard