import React from 'react';
import { Card, CardContent, Typography, Avatar, Container } from '@mui/material';
import data from '../data/about.json';

function About() {
  return (
    <Container>
      <Card style={{ marginTop: 20, padding: 20 }} sx={{ borderRadius: '12px' }}>
        <Avatar
          alt="Profile Picture" src={data.profilePicture}
          style={{ width: 100, height: 100, margin: '0 auto' }}
        />
        <CardContent>
          <Typography variant="h5">{data.name}</Typography>
          <Typography variant="body1">{data.bio}</Typography>
          {/* Add more fields as needed */}
        </CardContent>
      </Card>
    </Container>
  );
}

export default About;