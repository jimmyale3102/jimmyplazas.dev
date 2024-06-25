import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Avatar, Container } from '@mui/material';
import { db } from '../firebase.js'; 
import { collection, getDocs } from 'firebase/firestore';

function About() {
  const [aboutData, setAboutData] = useState(null);

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
        <Avatar
          alt="Profile Picture" src={aboutData.profilePicture}
          style={{ width: 100, height: 100, margin: '0 auto' }}
        />
        <CardContent>
          <Typography variant="h5">{aboutData.name}</Typography>
          <Typography variant="body1">{aboutData.bio}</Typography>
          {/* Add more fields as needed */}
        </CardContent>
      </Card>
    </Container>
  );
}

export default About;