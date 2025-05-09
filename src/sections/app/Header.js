import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  Avatar
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import WifiIcon from '@mui/icons-material/Wifi';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import DarkMode from '@mui/icons-material/DarkMode';
import WbSunny from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import { Home, Work } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { BorderRadiusMedium, useThemeContext } from '../../ThemeContext';

function Header() {
  const navigate = useNavigate();
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: mode === 'light' ? 'rgba(13, 71, 161, 0.8)' : 'rgba(51, 51, 51, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transition: 'background-color 0.2s ease-in-out',
        borderRadius: '8px',
        marginTop: '8px',
        marginBottom: '16px',
        maxWidth: '800px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            onClick={() => navigate("./")}
            sx={{ textTransform: 'none', color: 'inherit', padding: 0 }}
          >
            <Avatar
                alt="logo"
                src='./assets/web/favicon-light.png'
                style={{ width: 24, height: 24 }}
              />
            <Typography variant="subtitle1" fontWeight="bold">
              Jimmy Plazas
            </Typography>
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {!isSmallScreen && (
            <>
              <Button
                onClick={() => navigate("./")}
                startIcon={<Home />}
                style={{ textTransform: 'none', color: 'inherit', borderRadius: BorderRadiusMedium }}
              >
                <Typography variant="subtitle1" fontWeight="bold">Home</Typography>
              </Button>

              <Button
                onClick={() => navigate("./projects")}
                startIcon={<Work />}
                style={{ textTransform: 'none', color: 'inherit', borderRadius: BorderRadiusMedium }}
              >
                <Typography variant="subtitle1" fontWeight="bold">Projects</Typography>
              </Button>
            </>
          )}

          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <DarkMode /> : <WbSunny />}
          </IconButton>
          <IconButton color="inherit"><WifiIcon /></IconButton>
          <IconButton color="inherit"><BatteryFullIcon /></IconButton>

          {isSmallScreen && (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 200 }}>
          <ListItem button onClick={() => handleNavigate('./')}>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleNavigate('./projects')}>
            <ListItemIcon><Work /></ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;