import React from 'react';
import { Container } from '@mui/material';
import Intro from '../../sections/home/Intro.js';
import Statistics from '../../sections/home/Statistics.js';
import Projects from '../../sections/home/Projects.js';

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
      <Projects />
    </Container>
  );
}

export default Home;
