import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#026aa7',
    },
    secondary: {
      main: '#eff8fe',
      light: '#bdfdff',
    },
    info: {
      main: '#ADD8E6',
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
      fontSize: 36,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 32,
      lineHeight: 1.4,
    },
    h3: {
      fontSize: 24,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: 22,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: 20,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: 22,

      lineHeight: 1.4,
    },
  },
})
