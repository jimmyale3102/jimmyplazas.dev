import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { useThemeContext, BorderRadiusCard, MarginDefault } from '../../ThemeContext';
import CountUp from 'react-countup';

function Statistics() {
  const { mode, toggleTheme } = useThemeContext();
  const yearsOfExperience = 4;
  const projectsWorkedOn = 10;
  const contributions = 10340;

  return (
    <Box style={{ marginTop: MarginDefault }}>
      <Grid container spacing={3} >
        <Grid item xs={4} sm={4}>
          <Card style={{ borderRadius: BorderRadiusCard }}>
            <CardContent>
              <Typography variant="h4" fontWeight={'bold'}>
                <CountUp start={0} end={yearsOfExperience} duration={6} />
              </Typography>
              <Typography variant="body2">
                <span style={{ color: mode === 'light' ? '#0d47a1' : '#FFD700' }} >Years</span> of Experience
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
              <Typography variant="body2">
                <span style={{ color: mode === 'light' ? '#0d47a1' : '#FFD700' }} >Projects</span> Worked On
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
              <Typography variant="body2">
                <span style={{ color: mode === 'light' ? '#0d47a1' : '#FFD700' }} >Contributions</span> on GitHub
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Statistics;
