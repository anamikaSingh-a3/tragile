import { Box, ThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import Navbar from './components/header/Navbar'
import SideDrawer from './components/sideNavbar/SideDrawer'
import { theme } from './theme/theme'
import { DragDropContext } from 'react-beautiful-dnd'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DragDropContext onDragEnd={() => { }}>
      <Box maxWidth='lg'>
        <BrowserRouter>
          <Navbar />
          <SideDrawer />
          <Routes />
        </BrowserRouter>
      </Box>
      </DragDropContext>
    </ThemeProvider>
  )
}

export default App
