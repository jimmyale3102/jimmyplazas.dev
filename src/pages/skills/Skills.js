import React from 'react';
import { Container, Typography, LinearProgress } from '@mui/material';

function Skills() {
  return (
    <Container>
      <Typography variant="h4" style={{ margin: '20px 0' }}>Skills</Typography>
      <Typography variant="h6">Java</Typography>
      <LinearProgress variant="determinate" value={80} />
    </Container>
  );
}

export default Skills;
