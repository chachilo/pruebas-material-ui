import { useState } from 'react'
import { 
  Box,
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Toolbar,
  IconButton,
  Collapse
} from '@mui/material'
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  ShoppingCart as ProductsIcon,
  Settings as SettingsIcon,
  Mail as MessagesIcon,
  Notifications as NotificationsIcon,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'

const drawerWidth = 240

// Componente Link personalizado para mejor integración con MUI
const CustomLink = ({ to, children, ...props }) => {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}

const SideMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState({})
  const location = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleSubmenuToggle = (key) => {
    setOpenSubmenu(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const menuItems = [
    { 
      text: 'Dashboard', 
      icon: <DashboardIcon />, 
      path: '/' 
    },
    { 
      text: 'Productos', 
      icon: <ProductsIcon />,
      subItems: [
        { text: 'Listado', path: '/products' },
        { text: 'Categorías', path: '/products/categories' },
        { text: 'Inventario', path: '/products/inventory' }
      ]
    },
    { 
      text: 'Mensajes', 
      icon: <MessagesIcon />, 
      path: '/messages' 
    },
    { 
      text: 'Configuración', 
      icon: <SettingsIcon />,
      subItems: [
        { text: 'Perfil', path: '/settings/profile' },
        { text: 'Seguridad', path: '/settings/security' },
        { text: 'Notificaciones', path: '/settings/notifications' }
      ]
    }
  ]

  const isActive = (path) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path))
  }

  const renderMenuItem = (item, isSubItem = false) => (
    <ListItem 
      key={item.text} 
      disablePadding
      sx={{
        pl: isSubItem ? 4 : 2,
        '& .MuiListItemButton-root': {
          minHeight: 48,
          justifyContent: 'initial',
          px: 2.5,
        }
      }}
    >
      <ListItemButton
        component={CustomLink}
        to={item.path}
        selected={isActive(item.path)}
        sx={{
          '&.Mui-selected': {
            backgroundColor: 'primary.light',
            '& .MuiListItemIcon-root': {
              color: 'primary.main'
            },
            '&:hover': {
              backgroundColor: 'primary.light'
            }
          }
        }}
      >
        {!isSubItem && item.icon && (
          <ListItemIcon sx={{ minWidth: 0, mr: 3 }}>
            {item.icon}
          </ListItemIcon>
        )}
        <ListItemText 
          primary={item.text} 
          primaryTypographyProps={{ 
            fontWeight: isActive(item.path) ? 'bold' : 'normal' 
          }} 
        />
      </ListItemButton>
    </ListItem>
  )

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <div key={item.text}>
            {item.subItems ? (
              <>
                <ListItemButton 
                  onClick={() => handleSubmenuToggle(item.text)}
                  sx={{
                    minHeight: 48,
                    justifyContent: 'initial',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 0, mr: 3 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                  {openSubmenu[item.text] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSubmenu[item.text]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map(subItem => renderMenuItem(subItem, true))}
                  </List>
                </Collapse>
              </>
            ) : (
              renderMenuItem(item)
            )}
          </div>
        ))}
      </List>
      <Divider />
    </div>
  )

  return (
    <Box
      component="nav"
      sx={{ 
        width: { sm: drawerWidth }, 
        flexShrink: { sm: 0 },
        '& .MuiDrawer-paper': {
          backgroundColor: 'background.paper',
          color: 'text.primary'
        }
      }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth 
          }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth 
          }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default SideMenu