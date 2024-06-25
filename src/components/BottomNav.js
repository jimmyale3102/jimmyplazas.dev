import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FrameSource from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useNavigate } from 'react-router-dom';

function BottomNav() {
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
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
      }}
      >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="About" icon={<InfoIcon />} />
      <BottomNavigationAction label="Projects" icon={<FrameSource />} />
      <BottomNavigationAction label="Skills" icon={<CodeIcon />} />
      <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
