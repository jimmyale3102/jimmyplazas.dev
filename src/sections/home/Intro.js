import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, Button, useTheme, Box } from '@mui/material';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as XIcon } from '../../assets/x.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import EmailIcon from '@mui/icons-material/Email';
import { useThemeContext, BorderRadiusCard, BorderRadiusMedium, MarginDefault, MarginSmall, MarginXSmall } from '../../ThemeContext';
import IconButtonComponent from '../../components/common/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import './Intro.css';

function Intro() {
  const { mode } = useThemeContext();

  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? '#0288d1' : '#ffffff';

  return (
    <Box>
      <Card style={{ borderRadius: BorderRadiusCard }}>
        <Grid container padding={MarginSmall} style={{ display: 'flex' }}>

          <Grid item style={{ display: 'flex', marginLeft: MarginDefault, marginRight: MarginDefault, marginTop: MarginDefault }}>
            <Avatar
              alt="Profile Picture"
              src='./assets/profile.jpg'
              style={{ width: 180, height: 180 }}
            />
          </Grid>

          <Grid item style={{ flex: 1 }}>
            <CardContent style={{ textAlign: 'left' }}>
              <Typography variant="h5" fontWeight={'bold'}>
                <span className="waving-hand">👋 </span>
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

              <Grid container mt={2} style={{ alignItems: 'center' }}>

                <Grid item xs={12} sm={12} md={4}>
                  <Button
                    variant="outlined"
                    style={{ marginRight: '8px', borderRadius: BorderRadiusMedium, color: iconColor }}
                    href='./JimmyPlazas_CV.pdf'
                    target='_blank'>
                    Download CV
                    <DownloadIcon style={{ width: '18px', height: '18px', marginLeft: MarginXSmall, fill: iconColor }} />
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                  {IconButtonComponent('https://github.com/jimmyale3102', GitHubIcon)}
                  {IconButtonComponent('https://www.linkedin.com/in/jimmyplazas/', LinkedInIcon)}
                  {IconButtonComponent('https://twitter.com/jimmyale3201', XIcon)}
                  {IconButtonComponent('https://www.instagram.com/aleejo_loopez/', InstagramIcon)}
                  {IconButtonComponent('./Contact/', EmailIcon)}
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