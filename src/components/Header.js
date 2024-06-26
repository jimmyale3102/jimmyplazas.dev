import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WifiIcon from '@mui/icons-material/Wifi';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import { useThemeContext } from './ThemeContext';
import DarkMode from '@mui/icons-material/DarkMode';
import WbSunny from '@mui/icons-material/WbSunny';

function Header() {

  const { mode, toggleTheme } = useThemeContext();
  // Light color Hex: #0d47a1
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: mode === 'light' ? 'rgba(13, 71, 161, 0.8)' : 'rgba(51, 51, 51, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)', // For Safari support
        transition: 'background-color 0.2s ease-in-out',
        borderRadius: '8px',
        marginTop: '8px',
        marginBottom: '16px',
        maxWidth: '768px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      <Toolbar
      >
        <IconButton edge="start" color="inherit">
          <NotificationsIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <IconButton
          onClick={toggleTheme}
          color="inherit"
        >
          {mode === 'light' ? <DarkMode /> : <WbSunny />}
        </IconButton>
        <IconButton color="inherit">
          <WifiIcon />
        </IconButton>
        <IconButton color="inherit">
          <BatteryFullIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
