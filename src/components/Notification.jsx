import { useState } from 'react'
import { 
  IconButton, 
  Badge, 
  Menu, 
  MenuItem, 
  Typography,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import {
  Notifications as NotificationsIcon,
  Circle as CircleIcon
} from '@mui/icons-material'
import { SnackbarProvider, useSnackbar } from 'notistack'

const notifications = [
  { id: 1, text: 'Nuevo mensaje recibido', time: 'Hace 5 minutos', read: false },
  { id: 2, text: 'Actualización del sistema', time: 'Hace 2 horas', read: true },
  { id: 3, text: 'Pedido completado', time: 'Ayer', read: false }
]

export const NotificationButton = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { enqueueSnackbar } = useSnackbar()
  const unreadCount = notifications.filter(n => !n.read).length

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleNotificationClick = (notification) => {
    enqueueSnackbar(`Notificación: ${notification.text}`, { 
      variant: 'info',
      autoHideDuration: 3000
    })
    handleClose()
  }

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <Badge badgeContent={unreadCount} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 350,
            maxHeight: 400
          }
        }}
      >
        <MenuItem disabled>
          <Typography variant="subtitle1">Notificaciones</Typography>
        </MenuItem>
        {notifications.map((notification) => (
          <MenuItem 
            key={notification.id} 
            onClick={() => handleNotificationClick(notification)}
            sx={{ bgcolor: notification.read ? 'inherit' : 'action.hover' }}
          >
            <ListItemIcon>
              <CircleIcon fontSize="small" color={notification.read ? 'disabled' : 'primary'} />
            </ListItemIcon>
            <ListItemText
              primary={notification.text}
              secondary={notification.time}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export const NotificationProvider = ({ children }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      {children}
    </SnackbarProvider>
  )
}