import { Box, ThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import SideDrawer from './components/sideNavbar/SideDrawer'
import { theme } from './theme/theme'
import Routes from './routes/Routes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box maxWidth='lg'>
        <BrowserRouter>
          <SideDrawer />
          <Routes />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default App
