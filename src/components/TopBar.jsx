import { AppBar, Toolbar, IconButton, Typography, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const TopBar = ({ handleDrawerToggle }) => {
  const theme = useTheme()
  
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        display: { xs: 'block', sm: 'none' }
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Mi Aplicación
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar