import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { useThemeContext, BorderRadiusCard, MarginDefault, onDarkTextColor, onLightTextColor } from '../../ThemeContext';
import CountUp from 'react-countup';

function Statistics() {
  const { mode, toggleTheme } = useThemeContext();
  const yearsOfExperience = 4;
  const projectsWorkedOn = 10;
  const contributions = 10340;
  const textColor = mode === 'light' ? onLightTextColor : onDarkTextColor;
  return (
    <Box style={{ marginTop: MarginDefault }}>
      <Grid container spacing={3} >
        <Grid item xs={4} sm={4}>
          <Card style={{ borderRadius: BorderRadiusCard }}>
            <CardContent>
              <Typography variant="h4" fontWeight={'bold'}>
                <CountUp start={0} end={yearsOfExperience} duration={6} />
              </Typography>
              <Typography variant="body2" fontWeight={'bold'}>
                <span style={{ color: textColor }} >Years</span> of Experience
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Card style={{ borderRadius: BorderRadiusCard }}>
            <CardContent>
              <Typography variant="h4" fontWeight={'bold'}>
                <CountUp start={0} end={projectsWorkedOn} duration={5} />
              </Typography>
              <Typography variant="body2" fontWeight={'bold'}>
                <span style={{ color: textColor }} >Projects</span> Worked On
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Card style={{ borderRadius: BorderRadiusCard }}>
            <CardContent>
              <Typography variant="h4" fontWeight={'bold'}>
                <CountUp start={0} end={contributions} duration={3} />
              </Typography>
              <Typography variant="body2" fontWeight={'bold'}>
                <span style={{ color: textColor }} >Contributions</span> on GitHub
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Statistics;
