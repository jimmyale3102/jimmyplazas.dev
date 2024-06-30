import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, IconButton, useTheme, Box } from '@mui/material';
import { ReactComponent as GitHubIcon } from '../../github.svg';
import { ReactComponent as LinkedInIcon } from '../../linkedin.svg';
import { ReactComponent as XIcon } from '../../x.svg';
import { ReactComponent as InstagramIcon } from '../../instagram.svg';
import EmailIcon from '@mui/icons-material/Email';
import { useThemeContext, BorderRadiusCard, BorderRadiusMedium, MarginDefault } from '../ThemeContext';
import '../../Home.css';

function Intro() {
  const { mode } = useThemeContext();

  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? '#0288d1' : '#ffffff';

  return (
    <Box>
      <Card  style={{ borderRadius: BorderRadiusCard }}>
        <Grid container spacing={3} padding={MarginDefault} style={{ justifyContent: 'center', alignItems: 'center' }}>

          <Grid item md={4} xs={12} justifyContent={'center'} marginInline={MarginDefault}>
            <Avatar
              alt="Profile Picture"
              src='./profile.jpg'
              style={{ width: 200, height: 200 }}
            />
          </Grid>

          <Grid item md={7} xs={12}>
            <CardContent style={{ textAlign: 'left' }}>
              <Typography variant="h4" fontWeight={'bold'}>
                <span className="waving-hand">👋</span>
                Hello, World!
              </Typography>
              <Typography mb={2} variant="h4" fontWeight={'bold'}>
                I am <span style={{ color: mode === 'light' ? '#0d47a1' : '#FFD700' }} >Jimmy</span>
              </Typography>
              <Typography variant="body1">
                A passionate Android developer from Colombia 🇨🇴. Focused on crafting intuitive, user-friendly apps.
              </Typography>
              <Typography variant="body1" marginTop={2}>
              Committed to continuous skill enhancement and staying updated with the latest technologies.
              </Typography>

              <Box mt={2}>
                <IconButton
                  style={{ borderRadius: BorderRadiusMedium }}
                  href='https://github.com/jimmyale3102'
                  target='_blank'>
                  <GitHubIcon style={{ fill: iconColor }} />
                </IconButton>

                <IconButton
                  style={{ marginLeft: '4px', borderRadius: BorderRadiusMedium }}
                  href='https://www.linkedin.com/in/jimmyplazas/'
                  target='_blank'>
                  <LinkedInIcon style={{ fill: iconColor }} />
                </IconButton>

                <IconButton
                  style={{ marginLeft: '4px', borderRadius: BorderRadiusMedium }}
                  href='https://twitter.com/jimmyale3201'
                  target='_blank'>
                  <XIcon style={{ fill: iconColor }} />
                </IconButton>

                <IconButton
                  style={{ marginLeft: '4px', borderRadius: BorderRadiusMedium }}
                  href='https://www.instagram.com/aleejo_loopez/'
                  target='_blank'>
                  <InstagramIcon style={{ fill: iconColor }} />
                </IconButton>

                <IconButton
                  style={{ marginLeft: '4px', borderRadius: BorderRadiusMedium }}
                  href='./Contact/'>
                  <EmailIcon style={{ fill: iconColor }} />
                </IconButton>
              </Box>

            </CardContent>
          </Grid>

        </Grid>
      </Card>
    </Box>
  );
}

export default Intro;