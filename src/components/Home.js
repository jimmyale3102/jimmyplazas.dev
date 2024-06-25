import React from 'react';
import { Fab, Container, Typography } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <Container>
      <Typography variant="h3" style={{ margin: '20px 0' }}>Welcome to My Portfolio</Typography>
      <Fab color="primary" aria-label="contact" onClick={handleContactClick} style={{ position: 'fixed', bottom: 16, right: 16 }} sx={{ borderRadius: '16px' }}>
        <ContactMailIcon />
      </Fab>
    </Container>
  );
}

export default Home;
