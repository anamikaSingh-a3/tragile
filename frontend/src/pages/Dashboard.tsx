import { Container, CssBaseline, Typography } from '@material-ui/core'
import React from 'react'
import SideDrawer from '../components/sideNavbar/SideDrawer'
import { StyledContainer, StyledContainerUser } from '../theme/uiComponents/layout/Container'
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper'

const Dashboard: React.FC = () => {
    return (
        <>
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
        </>
    )
}

export default Dashboard