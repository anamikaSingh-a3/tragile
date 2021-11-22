import { Box, createMuiTheme, ThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import Navbar from './components/Navbar'
import SideDrawer from './components/SideDrawer'

/**
 * Creating a theme
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#026aa7',
    },
    secondary: {
      main: '#eff8fe',
      light: '#bdfdff',
    },
    info: {
      main: '#7b818d',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
    },
    common: {
      black: '#000',
      white: '#FFF',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
    },
  },
  typography: {
    fontFamily: 'Rajdhani, sans-serif',
    h1: {
      fontFamily: 'Jomhuria, cursive',
    },
    h2: {
      fontFamily: 'Jomhuria, cursive',
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box maxWidth='lg'>
        <BrowserRouter>
          <Navbar />
          <SideDrawer />
          <Routes />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default App
