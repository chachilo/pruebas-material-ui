import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  useTheme,
  Box // Añade Box aquí con los demás imports de MUI
} from '@mui/material';
import { 
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { NotificationProvider, NotificationButton } from './components/Notification';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Messages from './pages/Messages';
import Settings from './pages/Settings';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <NotificationProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mi App con Material UI
            </Typography>
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <NotificationButton />
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Box>
    </NotificationProvider>
  );
}

export default App;