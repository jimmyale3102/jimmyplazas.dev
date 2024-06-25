import React from 'react';
import { Container, TextField, Button, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

function Contact() {
  return (
    <Container>
      <Typography variant="h4" style={{ margin: '20px 0' }}>Contact Me</Typography>
      <form>
        <TextField label="Name" fullWidth margin="normal"/>
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary" type="submit">Send</Button>
      </form>
      <div style={{ marginTop: 20 }}>
        <IconButton color="primary"><PhoneIcon /></IconButton>
        <IconButton color="primary"><EmailIcon /></IconButton>
        <IconButton color="primary"><TwitterIcon /></IconButton>
      </div>
    </Container>
  );
}

export default Contact;
