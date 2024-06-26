import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FrameSource from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from './ThemeContext';

function BottomNav() {
  const { mode, toggleTheme } = useThemeContext();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/about');
        break;
      case 2:
        navigate('/projects');
        break;
      case 3:
        navigate('/skills');
        break;
      case 4:
        navigate('/contact');
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        maxWidth: '768px',
        margin: '0 auto',
        backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(18, 18, 18, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)', // For Safari support
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px',
        boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      <BottomNavigationAction showLabel={true} label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction showLabel={true} label="About" icon={<InfoIcon />} />
      <BottomNavigationAction showLabel={true} label="Projects" icon={<FrameSource />} />
      <BottomNavigationAction showLabel={true} label="Skills" icon={<CodeIcon />} />
      <BottomNavigationAction showLabel={true} label="Contact" icon={<ContactMailIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
