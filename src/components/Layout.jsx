import { Box, CssBaseline, useTheme, useMediaQuery } from '@mui/material'
import { Outlet, useLocation } from 'react-router-dom'
import SideMenu from './SideMenu'
import { useEffect, useState } from 'react'
import TopBar from './TopBar' // Componente nuevo que crearemos

const Layout = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Cerrar el menú mobile al cambiar de ruta
  useEffect(() => {
    if (isMobile) {
      setMobileOpen(false)
    }
  }, [location, isMobile])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* TopBar para mobile */}
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      
      {/* SideMenu */}
      <SideMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      
      {/* Contenido principal */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(mobileOpen && {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          })
        }}
      >
        <Toolbar /> {/* Espacio para la TopBar */}
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout

// drawerWidth debe ser consistente con SideMenu
const drawerWidth = 240