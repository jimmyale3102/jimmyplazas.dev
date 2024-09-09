import React from 'react';
import { useTheme, CardActionArea, Card, CardContent, Typography, Grid } from '@mui/material';
import { useThemeContext, BorderRadiusCard, BackgroundColorDark, BackgroundColorLight } from '../../ThemeContext';

function VideoItem({ videoId, title, description, videoAlt, url }) {
  const { mode } = useThemeContext();
  const theme = useTheme();
  const cardBackgroundColor = theme.palette.mode === 'light' ? BackgroundColorLight : BackgroundColorDark;

  return (
    <Card style={{ backgroundColor: cardBackgroundColor, boxShadow: 'none', borderRadius: BorderRadiusCard, marginBottom: "16px" }}>
      <CardActionArea target='_blank' style={{ backgroundColor: cardBackgroundColor }}>
        <CardContent>
          <Grid alignItems={'top'} style={{ display: 'flex' }}>

            <Grid item marginRight={2} style={{ flex: 1 }}>
              <lite-youtube
                style={{ width: "560", height: "315" }}
                videoid={videoId}>
              </lite-youtube>
            </Grid>

            <Grid item style={{ flex: 1 }}>
              <Typography variant="body1" fontWeight={'bold'}>
                {title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Grid>

          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VideoItem;
