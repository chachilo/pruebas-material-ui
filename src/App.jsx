import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Box,
  CssBaseline
} from '@mui/material';
import { 
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './components/Layout';
import { NotificationProvider, NotificationButton } from './components/Notification';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Messages from './pages/Messages';
import Settings from './pages/Settings';

// Configuración del tema
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#1976d2' },
          secondary: { main: '#dc004e' },
        }
      : {
          primary: { main: '#90caf9' },
          secondary: { main: '#f48fb1' },
          background: { default: '#121212', paper: '#1e1e1e' },
        }),
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme(getDesignTokens(darkMode ? 'dark' : 'light'));

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NotificationProvider>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          {/* AppBar movido al Layout para mejor organización */}
          
          <Routes>
            <Route path="/" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="messages" element={<Messages />} />
              <Route path="settings" element={<Settings />} />
              
              {/* Rutas para submenús */}
              <Route path="products/categories" element={<div>Categorías</div>} />
              <Route path="settings/profile" element={<div>Perfil</div>} />
            </Route>
          </Routes>
        </Box>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;