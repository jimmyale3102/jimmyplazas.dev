import React from 'react';
import { Container } from '@mui/material';
import { MarginDefault, MarginToolBar } from '../../ThemeContext.js';
import ProjectsList from '../../sections/home/Projects.js';


function Projects() {
  return (
    <Container style={{ marginTop: MarginToolBar, marginBottom: MarginDefault }}>
      <ProjectsList />
    </Container>
  );
}

export default Projects;