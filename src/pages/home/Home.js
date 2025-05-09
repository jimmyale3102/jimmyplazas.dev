import React from 'react';
import { Container } from '@mui/material';
import Intro from '../../sections/home/Intro.js';
import Statistics from '../../sections/home/Statistics.js';
import ProjectsList from '../../sections/home/Projects.js';
import Experience from '../../sections/home/Experience.js'
import { MarginDefault, MarginToolBar } from '../../ThemeContext.js';
import Skills from '../../sections/home/Skills.js';
import MyVideos from '../../sections/home/MyVideos.js';

function Home() {
  const yearsOfExperience = 3
  const projectsWorkedOn = 5

  return (
    <Container style={{ marginTop: MarginToolBar, marginBottom: MarginDefault }}>
      <Intro />
      <Statistics
        yearsOfExperience={yearsOfExperience}
        projectsWorkedOn={projectsWorkedOn}
      />
      <ProjectsList showAllProjects={false} />
      <Skills />
      <Experience />
      <MyVideos />
    </Container>
  );
}

export default Home;
