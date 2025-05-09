import React, { useEffect, useState } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { useThemeContext, MarginDefault, MarginXSmall, MarginSmall, BorderRadiusCard, onLightBorderColor, onDarkBorderColor, onLightTextColor, onDarkTextColor, MarginXBig } from '../../ThemeContext';

function Skills() {
  const [skillsData, setSkills] = useState([]);
  const { mode } = useThemeContext();
  const borderColor = mode === 'light' ? onLightBorderColor : onDarkBorderColor;

  useEffect(() => {
    fetch('./content/skills.json')
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(error => console.error('Error fetching skills data:', error));
  }, []);

  return (
    <Box style={{ marginTop: MarginXBig }} >
      <Typography
        variant="h4"
        fontWeight={'bold'}
        style={{ marginLeft: MarginDefault, marginBottom: MarginDefault }}>
        <span style={{ color: mode === 'light' ? onLightTextColor : onDarkTextColor }} >Skills</span>
      </Typography>

      <Box display={'flex'} flexWrap={'wrap'}>
        {skillsData.map((skillItem, index) => (
          <Box
            key={index} // Ensure each item has a unique key
            p={MarginSmall}
            display={'flex'}
            alignItems={'top'}
            marginRight={MarginSmall}
            marginBottom={MarginSmall}
            style={{ border: `1px solid ${borderColor}`, borderRadius: BorderRadiusCard }}
          >
            <img src={skillItem.icon} alt={skillItem.name} style={{ height: 20, width: 'auto' }} />
            <Stack spacing={'-4px'} style={{ marginInline: MarginXSmall }}>
              <Typography variant="body1" fontWeight={'bold'}>
                {skillItem.name}
              </Typography>
              <Typography variant="caption">
                {skillItem.level}
              </Typography>
            </Stack>

          </Box>
        ))}
      </Box>


    </Box >
  );
}

export default Skills;
