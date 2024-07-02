import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, IconButton, useTheme, Box } from '@mui/material';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as XIcon } from '../../assets/x.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import EmailIcon from '@mui/icons-material/Email';
import { useThemeContext, BorderRadiusCard, BorderRadiusMedium, MarginDefault, MarginSmall } from '../../ThemeContext';
import './Intro.css';

function Intro() {
  const { mode } = useThemeContext();

  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? '#0288d1' : '#ffffff';

  return (
    <Box>
      <Card  style={{ borderRadius: BorderRadiusCard }}>
        <Grid container  padding={MarginSmall} style={{ display: 'flex' }}>

          <Grid item style={{display: 'flex', marginLeft: MarginDefault, marginRight: MarginDefault, marginTop: MarginDefault}}>
            <Avatar
              alt="Profile Picture"
              src='./assets/profile.jpg'
              style={{ width: 180, height: 180 }}
            />
          </Grid>

          <Grid item style={{flex: 1}}>
            <CardContent style={{ textAlign: 'left' }}>
              <Typography variant="h5" fontWeight={'bold'}>
                <span className="waving-hand"> 👋 </span>
                 Hello, World!
              </Typography>
              <Typography mb={2} variant="h5" fontWeight={'bold'}>
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