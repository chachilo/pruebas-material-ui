import { Box, CssBaseline } from '@mui/material'
import SideMenu from './SideMenu'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideMenu />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout