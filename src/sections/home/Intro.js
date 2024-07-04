import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, Button, useTheme, Box, Stack } from '@mui/material';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as XIcon } from '../../assets/x.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as ResumeIcon } from '../../assets/resume.svg';
import { Email, LocationOn, School, Language, Home } from '@mui/icons-material';
import { useThemeContext, BorderRadiusCard, BorderRadiusMedium, MarginDefault, MarginSmall, MarginXSmall, onLightBorderColor, onDarkBorderColor } from '../../ThemeContext';
import IconButtonComponent from '../../components/common/IconButton';
import './Intro.css';

function Intro() {
  const { mode } = useThemeContext();
  const theme = useTheme();
  const borderColor = mode === 'light' ? onLightBorderColor : onDarkBorderColor;
  const iconColor = theme.palette.mode === 'light' ? '#0288d1' : '#ffffff';

  return (
    <Box>
      <Card style={{ borderRadius: BorderRadiusCard }}>
        <Grid container padding={MarginSmall} style={{ display: 'flex' }}>

          <Grid item style={{ display: 'flex', marginLeft: MarginDefault, marginRight: MarginDefault}}>
            <Stack direction={'column'} spacing={1}>
              <Avatar
                alt="Profile Picture"
                src='./assets/profile.jpg'
                style={{ width: 160, height: 160 }}
              />
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
            </Stack>
          </Grid>

          <Grid item style={{ flex: 1 }}>
            <CardContent style={{ textAlign: 'left' }}>
              <Typography variant="h5" fontWeight={'bold'}>
                <span style={{ marginRight: MarginSmall }} className="waving-hand">👋 </span>
                Hello, World!
              </Typography>
              <Typography mb={1} variant="h5" fontWeight={'bold'}>
                I am <span style={{ color: mode === 'light' ? '#0d47a1' : '#FFD700' }} >Jimmy</span>
              </Typography>
              <Typography variant="body1">
                A passionate Android developer from Colombia 🇨🇴. Focused on crafting intuitive, user-friendly apps.
              </Typography>
              <Typography variant="body1" marginTop={1}>
                Committed to continuous skill enhancement and staying updated with the latest technologies.
              </Typography>

              <Grid container mt={2} style={{ alignItems: 'center' }}>

                <Grid item xs={12} sm={12} md={3}>
                  <Button
                    variant="outlined"
                    style={{
                      marginRight: '8px',
                      borderRadius: BorderRadiusMedium,
                      color: iconColor,
                      border: `1px solid ${borderColor}`
                    }}
                    href='./JimmyPlazas_CV.pdf'
                    target='_blank'>
                    <ResumeIcon style={{ width: '18px', height: '18px', marginRight: MarginXSmall, fill: iconColor }} />
                    Resume
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                  {IconButtonComponent('https://github.com/jimmyale3102', GitHubIcon)}
                  {IconButtonComponent('https://www.linkedin.com/in/jimmyplazas/', LinkedInIcon)}
                  {IconButtonComponent('https://twitter.com/jimmyale3201', XIcon)}
                  {IconButtonComponent('https://www.instagram.com/aleejo_loopez/', InstagramIcon)}
                  {IconButtonComponent('./Contact/', Email)}
                </Grid>
              </Grid>

            </CardContent>
          </Grid>

        </Grid>
      </Card>
    </Box>
  );
}

export default Intro;