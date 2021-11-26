import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import TopNavbar from './Toolbar'

const Navbar: React.FC = () => {
  return (
    <AppBar position='static'>
      <TopNavbar />
    </AppBar>
  )
}
export default Navbar
