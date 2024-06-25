import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function Projects() {
  return (
    <Container>
      <Typography variant="h4" style={{ margin: '20px 0' }}>Projects</Typography>
      <Card style={{ marginBottom: 20 }} sx={{ borderRadius: '12px' }}>
        <CardMedia image="/screenshot.jpg" title="Project Screenshot" style={{ height: 140 }} />
        <CardContent>
          <Typography variant="h5">Project Title</Typography>
          <Typography variant="body1">Description of the project.</Typography>
          <a href="repository_link">View Repository</a>
        </CardContent>
      </Card>
      <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: 16, right: 16 }} sx={{ borderRadius: '16px' }}>
        <AddIcon />
      </Fab>
    </Container>
  );
}

export default Projects;
