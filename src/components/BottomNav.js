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
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)', // For Safari support
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: '50%',
        maxWidth: '768px',
        transform: 'translateX(-50%)',
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px',
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
