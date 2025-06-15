import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Settings as SettingsIcon,
  AccountCircle as ProfileIcon,
  Lock as SecurityIcon,
  Notifications as NotificationsIcon,
  Palette as ThemeIcon,
  Language as LanguageIcon,
  Wifi as NetworkIcon,
  Storage as StorageIcon,
  Help as HelpIcon,
  ExitToApp as LogoutIcon
} from '@mui/icons-material';

const Settings = () => {
  const settingsOptions = [
    { icon: <ProfileIcon />, name: 'Perfil', description: 'Configura tu perfil de usuario' },
    { icon: <SecurityIcon />, name: 'Seguridad', description: 'Contraseña y autenticación' },
    { icon: <NotificationsIcon />, name: 'Notificaciones', description: 'Preferencias de alertas' },
    { icon: <ThemeIcon />, name: 'Tema', description: 'Claro, oscuro o personalizado' },
    { icon: <LanguageIcon />, name: 'Idioma', description: 'Selecciona tu idioma' },
    { icon: <NetworkIcon />, name: 'Red', description: 'Configuración de conexión' },
    { icon: <StorageIcon />, name: 'Almacenamiento', description: 'Uso y limpieza' },
    { icon: <HelpIcon />, name: 'Ayuda', description: 'Centro de soporte' },
    { icon: <LogoutIcon />, name: 'Cerrar sesión', description: 'Salir de la aplicación' }
  ];

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Configuración
      </Typography>
      
      <Grid container spacing={3}>
        {settingsOptions.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
              <List>
                <ListItem>
                  <ListItemIcon sx={{ color: 'primary.main' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    secondary={item.description}
                    primaryTypographyProps={{ variant: 'h6' }}
                    secondaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Settings;