import React from 'react';
import { useTheme, CardActionArea, Card, CardContent, Typography, Grid } from '@mui/material';
import { useThemeContext, BorderRadiusCard, BackgroundColorDark, BackgroundColorLight } from '../../ThemeContext';
import { YouTube } from '@mui/icons-material';
import IconButtonComponent from '../common/IconButtonComponent';

function VideoItem({ videoId, title, description, videoAlt, url }) {
  const { mode } = useThemeContext();
  const theme = useTheme();
  const cardBackgroundColor = theme.palette.mode === 'light' ? BackgroundColorLight : BackgroundColorDark;

  return (
    <Card
      style={{
        height: 'auto',
        backgroundColor: cardBackgroundColor,
        boxShadow: 'none',
        borderRadius: BorderRadiusCard,
        marginBottom: "16px",
      }}
    >
      <CardActionArea target='_blank' style={{ backgroundColor: cardBackgroundColor }}>
        <CardContent>
          <Grid container spacing={2} alignItems={"top"} style={{ display: 'flex' }}>
            <Grid item xs={12} sm={6}>
              <lite-youtube
                style={{ width: '100%', height: 'auto', maxWidth: '560px', maxHeight: '315px', borderRadius: BorderRadiusCard }}
                videoid={videoId}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body1" fontWeight={'bold'}>
                {title}
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                {description}
              </Typography>

              <div style={{ display: 'flex', marginTop: '16px' }}>
                <IconButtonComponent text="Watch on YouTube" href={url} IconComponent={YouTube} />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VideoItem;
