import React from 'react';
import { Container, Box } from '@mui/material';
import Statistics from './Statistics.js';
import Intro from './Intro.js';

function Home() {
  const yearsOfExperience = 3
  const projectsWorkedOn = 5

  return (
    <Container style={{ marginTop: '88px', marginBottom: '88px'}}>
      <Intro/>
      <Statistics
        yearsOfExperience={yearsOfExperience}
        projectsWorkedOn={projectsWorkedOn}
      />
    </Container>
  );
}

export default Home;
