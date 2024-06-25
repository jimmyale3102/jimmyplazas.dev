import React, { useState, useEffect } from 'react';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Box, Fab, Card, CardContent, Typography, Avatar, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase.js';
import { collection, getDocs } from 'firebase/firestore';

function Home() {
  const navigate = useNavigate();
  const [aboutData, setAboutData] = useState(null);

  const handleContactClick = () => {
    navigate('/contact');
  };

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const aboutCollectionRef = collection(db, 'About');
        const querySnapshot = await getDocs(aboutCollectionRef);

        querySnapshot.forEach((doc) => {
          if (!aboutData) {
            setAboutData(doc.data());
          }
        });
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return (
      <Container>
        <Card style={{ marginTop: 20, padding: 20 }} sx={{ borderRadius: '12px' }}>
          <CardContent>
            <Typography variant="h5">Loading...</Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Card style={{ marginTop: 20, padding: 20 }} sx={{ borderRadius: '12px' }}>
        <Grid container style={{ justifyContent: 'center'}}>

          <Grid item md={2} sm={2}>
            <Avatar
              alt="Profile Picture"
              src={aboutData.profilePicture}
              style={{ width: 160, height: 160}}
            />
          </Grid>

          <Grid item md={6} sm={6}>
            <CardContent style={{ textAlign: 'left' }}>
              <Typography variant="h5">{aboutData.name}</Typography>
              <Typography variant="body1">{aboutData.bio}</Typography>
            </CardContent>
          </Grid>

        </Grid>
      </Card>
      <Fab
        color="primary"
        aria-label="contact"
        onClick={handleContactClick}
        style={{ position: 'fixed', bottom: 16, right: 16 }}
        sx={{ borderRadius: '16px' }}>
        <ContactMailIcon />
      </Fab>
    </Container>
  );
}

export default Home;
