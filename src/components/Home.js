import React from 'react';
import { Card, CardContent, Typography, Avatar, Container, Grid, IconButton, useTheme, Box } from '@mui/material';
import { ReactComponent as GitHubIcon } from '../github.svg';
import { ReactComponent as LinkedInIcon } from '../linkedin.svg';
import { ReactComponent as XIcon } from '../x.svg';
import { ReactComponent as InstagramIcon } from '../instagram.svg';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from './ThemeContext';
import aboutData from '../data/about.json';
import '../Home.css';

function Home() {
  const navigate = useNavigate();
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? '#0288d1' : '#ffffff';

  return (
    <Container>
      <Card style={{ borderRadius: '12px', marginTop: '88px' }}>
        <Grid container padding={'16px'} style={{ justifyContent: 'center', alignItems: 'center' }}>

          <Grid item md={4} sm={5} xs={12} justifyContent={'center'}>
            <Avatar
              alt="Profile Picture"
              src={aboutData.profilePicture}
              style={{ width: 200, height: 200 }}
            />
          </Grid>

          <Grid item md={7} sm={6} xs={12}>
            <CardContent style={{ textAlign: 'left' }}>
              <Typography variant="h4" fontWeight={'bold'}>
                <span className="waving-hand">👋</span>
                Hello, World!
              </Typography>
              <Typography mb={2} variant="h4" fontWeight={'bold'}>
                I am <span style={{ color: mode === 'light' ? '#0d47a1' : '#FFD700' }} >Jimmy</span>
              </Typography>
              <Typography variant="body1">{aboutData.bio}</Typography>

              <Box mt={2}>
                <IconButton
                  style={{ borderRadius: '8px' }}
                  href='https://github.com/jimmyale3102'
                  target='_blank'>
                  <GitHubIcon style={{ fill: iconColor }} />
                </IconButton>

                <IconButton
                  style={{ marginLeft: '4px', borderRadius: '8px' }}
                  href='https://www.linkedin.com/in/jimmyplazas/'
                  target='_blank'>
                  <LinkedInIcon style={{ fill: iconColor }} />
                </IconButton>

                <IconButton
                  style={{ marginLeft: '4px', borderRadius: '8px' }}
                  href='https://twitter.com/jimmyale3201'
                  target='_blank'>
                  <XIcon style={{ fill: iconColor }} />
                </IconButton>

                <IconButton
                  style={{ marginLeft: '4px', borderRadius: '8px' }}
                  href='https://www.instagram.com/aleejo_loopez/'
                  target='_blank'>
                  <InstagramIcon style={{ fill: iconColor }} />
                </IconButton>

                <IconButton
                  style={{ marginLeft: '4px', borderRadius: '8px' }}
                  href='./Contact/'>
                  <EmailIcon style={{ fill: iconColor }} />
                </IconButton>
              </Box>

            </CardContent>
          </Grid>

        </Grid>
      </Card>
    </Container>
  );
}

export default Home;
