import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light', // Puedes cambiarlo dinámicamente
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#dc004e'
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#18202c',
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)'
          },
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }
        }
      }
    }
  }
})

export default theme