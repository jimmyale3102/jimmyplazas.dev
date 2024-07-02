import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useThemeContext, MarginDefault, MarginBig } from '../../ThemeContext';
import ProjectItem from '../../components/home/ProjectItem';

function Projects() {
  const [projectsData, setProjects] = useState([]);
  const { mode } = useThemeContext();

  useEffect(() => {
    fetch('./projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching project data:', error));
  }, []);

  return (
    <Box >
      <Typography
        variant="h4"
        style={{ marginLeft: MarginDefault, marginTop: MarginBig, marginBottom: MarginDefault }}>
        <span style={{ color: mode === 'light' ? '#0d47a1' : '#FFD700' }} >Projects</span>
      </Typography>

      {projectsData.map((projectItem, index) => (
        <ProjectItem
          key={index}
          iconSrc={projectItem.iconSrc}
          title={projectItem.title}
          description={projectItem.description}
          technologies={projectItem.technologies}
          url={projectItem.url}
          webUrl={projectItem.webUrl}
          gitHubUrl={projectItem.gitHubUrl}
          playStoreUrl={projectItem.playStoreUrl}
        />
      ))}

    </Box>
  );
}

export default Projects;