import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WifiIcon from '@mui/icons-material/Wifi';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import { useThemeContext } from './ThemeContext';
import DarkMode from '@mui/icons-material/DarkMode';
import WbSunny from '@mui/icons-material/WbSunny';

function Header() {

  const { mode, toggleTheme } = useThemeContext();

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: mode === 'light' ? '#6200EE' : '#333',
        transition: 'background-color 0.2s ease-in-out',
      }}
      sx={{ borderRadius: '8px' }}
    >
      <Toolbar>
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
