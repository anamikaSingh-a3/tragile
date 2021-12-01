import { Box, ThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import SideDrawer from './components/sideNavbar/SideDrawer'
import { theme } from './theme/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box maxWidth='lg'>
        <BrowserRouter>
          <SideDrawer />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default App
