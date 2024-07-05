import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useThemeContext, MarginDefault, onDarkTextColor, onLightTextColor } from '../../ThemeContext';
import ProjectItem from '../../components/home/ProjectItem';

function Experience() {
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
        style={{ marginLeft: MarginDefault, marginBottom: MarginDefault }}>
        <span style={{ color: mode === 'light' ? onLightTextColor : onDarkTextColor }} >Experience</span>
      </Typography>

      {expereinceData.map((experienceItem, index) => (
        <ProjectItem
          key={index}
          iconSrc={experienceItem.iconSrc}
          title={experienceItem.title}
          time={experienceItem.time}
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

export default Experience;
