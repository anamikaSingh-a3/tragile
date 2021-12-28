import { Box, ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/header/Navbar';
import SideDrawer from './components/sideNavbar/SideDrawer';
import Routes from './routes/Routes';
import { theme } from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box maxWidth='lg'>
        <BrowserRouter>
          <Navbar />
          {/* <SideDrawer /> */}
          <Routes />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default App
