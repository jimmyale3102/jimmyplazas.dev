import React from 'react';
import { Card, CardContent, Typography, useTheme, Box, Stack } from '@mui/material';
import { Email, LocationOn, School, Language, Home } from '@mui/icons-material';
import { useThemeContext, BorderRadiusCard, MarginDefault, MarginXSmall, onLightBorderColor, onDarkBorderColor } from '../../ThemeContext';
import CountUp from 'react-countup';
import './Intro.css';

function BasicInfo() {
  const { mode } = useThemeContext();
  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? '#0288d1' : '#ffffff';
  const yearsOfExperience = 4;
  const projectsWorkedOn = 10;
  const contributions = 10340;

  return (
    <Box marginTop={MarginDefault}>
      <Stack direction={'row'} spacing={2}>

        <Card style={{ borderRadius: BorderRadiusCard, padding: MarginDefault }} sx={6}>
          <Stack direction={'column'} spacing={0.5}>
            <Stack direction={'row'} spacing={1}>
              <School style={{ width: '18px', height: '18px', marginRight: MarginXSmall, fill: iconColor }} />
              <Typography variant="body2">
                Software Engineer
              </Typography>
            </Stack>
            <Stack direction={'row'} spacing={1}>
              <Home style={{ width: '18px', height: '18px', marginRight: MarginXSmall, color: iconColor }} />
              <Typography variant="body2">
                Boyacá, Colombia 🇨🇴
              </Typography>
            </Stack>
            <Stack direction={'row'} spacing={1}>
              <LocationOn style={{ width: '18px', height: '18px', marginRight: MarginXSmall, color: iconColor }} />
              <Typography variant="body2">
                Melbourne, Australia 🇦🇺
              </Typography>
            </Stack>
            <Stack direction={'row'} spacing={1}>
              <Language style={{ width: '18px', height: '18px', marginRight: MarginXSmall, color: iconColor }} />
              <Typography variant="body2">
                Spanish, English
              </Typography>
            </Stack>
          </Stack>
        </Card>

        <Stack direction={'column'}>
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
        </Stack>

      </Stack>
    </Box>
  );
}

export default BasicInfo;