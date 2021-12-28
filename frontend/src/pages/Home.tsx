import { Container, CssBaseline, Typography, Box } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router'
import { StyledButton } from '../theme/uiComponents/Button'
import { StyledContainerUser } from '../theme/uiComponents/layout/Container'
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper'

const Home: React.FC = () => {
    const history = useHistory()

    const onSignUpHandler = () => {
        history.push('/sign')
    }

    const onSignInHandler = () => {
        history.push('/signIn')
    }

    return (
        <>
            <StyledContainerUser maxWidth='lg'>
                <Container component='main' maxWidth='xs'>
                    <CssBaseline />
                    <StyledPaperUser elevation={3} >
                        <Typography component='h1' variant='h5'>
                            Tragile Home Page
                        </Typography>
                        <Box>
                            <StyledButton onClick={onSignUpHandler}>SignUP</StyledButton>
                            <StyledButton onClick={onSignInHandler}>SignIn</StyledButton>
                        </Box>
                    </StyledPaperUser>
                </Container>
            </StyledContainerUser>
        </>
    )
}

export default Home