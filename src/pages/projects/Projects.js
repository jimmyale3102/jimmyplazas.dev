import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container} from '@mui/material';

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
    </Container>
  );
}

export default Projects;
