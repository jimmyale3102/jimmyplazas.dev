import React, { useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useThemeContext, MarginDefault, onLightTextColor, onDarkTextColor, MarginXBig, BorderRadiusMedium } from '../../ThemeContext';
import ProjectItem from '../../components/home/ProjectItem';
import { ArrowForward } from '@mui/icons-material';
import IconButtonComponent from '../../components/common/IconButtonComponent';
import { useNavigate } from 'react-router-dom';

function ProjectsList({ showAllProjects = true }) {
  const navigate = useNavigate()
  const [projectsData, setProjects] = useState([]);
  const { mode } = useThemeContext();
  const projectsToShow = showAllProjects ? projectsData : projectsData.filter(project => project.showInHome);

  useEffect(() => {
    fetch('./content/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching project data:', error));
  }, []);

  return (
    <Box style={{ marginTop: MarginXBig }}>
      <Typography
        variant="h4"
        fontWeight={'bold'}
        style={{ marginLeft: MarginDefault, marginBottom: MarginDefault }}>
        <span style={{ color: mode === 'light' ? onLightTextColor : onDarkTextColor }} >Projects</span>
      </Typography>

      {projectsToShow.map((projectItem, index) => (
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

      {!showAllProjects && (
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Button
             onClick={() => navigate('./projects')} 
            variant="contained"
            startIcon={<ArrowForward />}
            style={{ borderRadius: BorderRadiusMedium }}
          >
            <Typography
              style={{ textTransform: 'none' }}
              variant={"subtitle1"}
              alignSelf={'flex-start'}
              fontWeight={"bold"}
            >
              View all
            </Typography>
          </Button>
        </div>
      )}

    </Box>
  );
}

export default ProjectsList;
