import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useThemeContext, MarginDefault, MarginBig } from '../../ThemeContext';
import ProjectItem from '../../components/home/ProjectItem';

function Projects() {
  const [expereinceData, setExperience] = useState([]);
  const { mode } = useThemeContext();

  useEffect(() => {
    fetch('./experience.json')
      .then(response => response.json())
      .then(data => setExperience(data))
      .catch(error => console.error('Error fetching experience data:', error));
  }, []);

  return (
    <Box >
      <Typography
        variant="h4"
        fontWeight={'bold'}
        style={{ marginLeft: MarginDefault, marginTop: MarginBig, marginBottom: MarginDefault }}>
        <span style={{ color: mode === 'light' ? '#0d47a1' : '#FFD700' }} >Experience</span>
      </Typography>

      {expereinceData.map((experienceItem, index) => (
        <ProjectItem
          key={index}
          iconSrc={experienceItem.iconSrc}
          title={experienceItem.title}
          description={experienceItem.description}
          technologies={experienceItem.technologies}
          url={experienceItem.url}
          webUrl={experienceItem.webUrl}
          gitHubUrl={experienceItem.gitHubUrl}
          playStoreUrl={experienceItem.playStoreUrl}
        />
      ))}

    </Box>
  );
}

export default Projects;
