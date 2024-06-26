import React from 'react';
import { Card, CardContent, Typography, Avatar, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from './ThemeContext';
import aboutData from '../data/about.json';
import '../Home.css';

function Home() {
  const navigate = useNavigate();
  const { mode, toggleTheme } = useThemeContext();

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
              <Typography variant="h5" fontWeight={'bold'}>
                <span className="waving-hand">👋</span>
                Hello, World!
              </Typography>
              <Typography mb={2} variant="h5" fontWeight={'bold'}>
                I am <span style={{ color: mode === 'light' ? '#0d47a1' : '#FFD700' }} >Jimmy</span>
              </Typography>
              <Typography variant="body1">{aboutData.bio}</Typography>
            </CardContent>
          </Grid>

        </Grid>
      </Card>


      
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
              <Typography variant="h5" fontWeight={'bold'}>
                <span className="waving-hand">👋</span>
                Hello, World!
              </Typography>
              <Typography mb={2} variant="h5" fontWeight={'bold'}>
                I am <span style={{ color: mode === 'light' ? '#6200EE' : '#FFD700' }} >Jimmy</span>
              </Typography>
              <Typography variant="body1">{aboutData.bio}</Typography>
            </CardContent>
          </Grid>

        </Grid>
      </Card>
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
              <Typography variant="h5" fontWeight={'bold'}>
                <span className="waving-hand">👋</span>
                Hello, World!
              </Typography>
              <Typography mb={2} variant="h5" fontWeight={'bold'}>
                I am <span style={{ color: mode === 'light' ? '#6200EE' : '#FFD700' }} >Jimmy</span>
              </Typography>
              <Typography variant="body1">{aboutData.bio}</Typography>
            </CardContent>
          </Grid>

        </Grid>
      </Card>
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
              <Typography variant="h5" fontWeight={'bold'}>
                <span className="waving-hand">👋</span>
                Hello, World!
              </Typography>
              <Typography mb={2} variant="h5" fontWeight={'bold'}>
                I am <span style={{ color: mode === 'light' ? '#6200EE' : '#FFD700' }} >Jimmy</span>
              </Typography>
              <Typography variant="body1">{aboutData.bio}</Typography>
            </CardContent>
          </Grid>

        </Grid>
      </Card>
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
              <Typography variant="h5" fontWeight={'bold'}>
                <span className="waving-hand">👋</span>
                Hello, World!
              </Typography>
              <Typography mb={2} variant="h5" fontWeight={'bold'}>
                I am <span style={{ color: mode === 'light' ? '#6200EE' : '#FFD700' }} >Jimmy</span>
              </Typography>
              <Typography variant="body1">{aboutData.bio}</Typography>
            </CardContent>
          </Grid>

        </Grid>
      </Card>
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
              <Typography variant="h5" fontWeight={'bold'}>
                <span className="waving-hand">👋</span>
                Hello, World!
              </Typography>
              <Typography mb={2} variant="h5" fontWeight={'bold'}>
                I am <span style={{ color: mode === 'light' ? '#6200EE' : '#FFD700' }} >Jimmy</span>
              </Typography>
              <Typography variant="body1">{aboutData.bio}</Typography>
            </CardContent>
          </Grid>

        </Grid>
      </Card>
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
              <Typography variant="h5" fontWeight={'bold'}>
                <span className="waving-hand">👋</span>
                Hello, World!
              </Typography>
              <Typography mb={2} variant="h5" fontWeight={'bold'}>
                I am <span style={{ color: mode === 'light' ? '#6200EE' : '#FFD700' }} >Jimmy</span>
              </Typography>
              <Typography variant="body1">{aboutData.bio}</Typography>
            </CardContent>
          </Grid>

        </Grid>
      </Card>
    </Container>
  );
}

export default Home;
