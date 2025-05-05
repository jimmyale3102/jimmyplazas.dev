import React from 'react';
import { useTheme, CardActionArea, Card, CardContent, Typography, Grid, autocompleteClasses } from '@mui/material';
import { useThemeContext, BorderRadiusCard, BackgroundColorDark, BackgroundColorLight } from '../../ThemeContext';
import { YouTube } from '@mui/icons-material';
import IconButtonComponent from '../common/IconButtonComponent';

function ShortsList({ videoId, title, description, videoAlt, url }) {
  const { mode } = useThemeContext();
  const theme = useTheme();
  const cardBackgroundColor = theme.palette.mode === 'light' ? BackgroundColorLight : BackgroundColorDark;

  return (
    <Card
      style={{
        width: '250px',
        border: '1px solid #ccc',
        height: '500px',
        backgroundColor: cardBackgroundColor,
        BorderRadiusCard: "5px",
        marginRight: "0px",
        marginBottom: "16px",
        flexDirection: 'row',
      }}
    >
      <CardActionArea target='_blank' style={{ backgroundColor: cardBackgroundColor }}>
        <CardContent>
          <Grid container spacing={12} alignItems={"top"}>
            <Grid item xs={12} sm={6}>
              <lite-youtube
                style={{display: 'block', borderRadius: '5px 9px' }}
                videoid={videoId}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                {title}
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                {description}
              </Typography>

            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ShortsList;