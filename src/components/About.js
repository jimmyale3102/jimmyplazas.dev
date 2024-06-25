import React from 'react';
import { Card, CardContent, Typography, Avatar, Container } from '@mui/material';

function About() {
  return (
    <Container>
      <Card style={{ marginTop: 20, padding: 20 }} sx={{ borderRadius: '12px' }}>
        <Avatar alt="Profile Picture" src="/profile.jpg" style={{ width: 100, height: 100, margin: '0 auto' }} />
        <CardContent>
          <Typography variant="h5">John Doe</Typography>
          <Typography variant="body1">
            Android Developer with X years of experience...
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default About;
