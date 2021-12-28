import { Container, CssBaseline, Typography } from '@material-ui/core'
import React from 'react'
import Navbar from '../components/header/Navbar'
import SideDrawer from '../components/sideNavbar/SideDrawer'
import { StyledContainerUser } from '../theme/uiComponents/layout/Container'
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper'

const Dashboard: React.FC = () => {
    return (
        <>
            <StyledContainerUser maxWidth='lg'>
                <SideDrawer />
            </StyledContainerUser>
        </>
    )
}

export default Dashboard