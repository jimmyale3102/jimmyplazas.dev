import React from 'react';
import { useTheme, Box, IconButton, Avatar, CardActionArea, Card, CardContent, Typography, Grid } from '@mui/material';
import { useThemeContext, BorderRadiusMedium, BorderRadiusCard, BackgroundColorDark, BackgroundColorLight, LightHighlightColor, DarkHighlightColor, onLightIconColor, onDarkIconColor } from '../ThemeContext';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as PlayStoreIcon } from '../../assets/play_store.svg';
import WebIcon from '@mui/icons-material/Web';

function getButton(href, icon) {
  return (
    <IconButton
      style={{ marginLeft: '4px', borderRadius: BorderRadiusMedium }}
      href={href}
      target='_blank'>
      {icon}
    </IconButton>
  );
}

function ProjectItem({ iconSrc, title, description, languages, url, webUrl, gitHubUrl, playStoreUrl }) {
  const { mode } = useThemeContext();
  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? onLightIconColor : onDarkIconColor;
  const cardBackgroundColor = theme.palette.mode === 'light' ? BackgroundColorLight : BackgroundColorDark;

  const webButton = (webUrl !== '') ? (
    getButton(
      webUrl,
      <WebIcon style={{ fill: iconColor }} />
    )
  ) : null;

  const gitHubButton = (gitHubUrl !== '') ? (
    getButton(
      playStoreUrl,
      <GitHubIcon style={{ fill: iconColor }} />
    )
  ) : null;

  const playStoreButton = (playStoreUrl !== '') ? (
    getButton(
      playStoreUrl,
      <PlayStoreIcon style={{ fill: iconColor }} />
    )
  ) : null;

  return (
    <Card style={{ backgroundColor: cardBackgroundColor, boxShadow: 'none', borderRadius: BorderRadiusCard }}>
      <CardActionArea href={url} target='_blank' style={{ backgroundColor: cardBackgroundColor }}>
        <CardContent>
          <Grid container alignItems={'top'} style={{ display: 'flex' }}>

            <Grid item marginRight={2}
              style={{
                display: 'flex'
              }}>
              <Avatar
                alt="Project Icon"
                src={iconSrc}
                variant='square'
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '72px',
                  maxWidth: '72px',
                  marginTop: '8px',
                  borderRadius: BorderRadiusMedium
                }}
              />
            </Grid>

            <Grid item style={{ flex: 1 }}>

              <Typography variant="h6">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography variant="caption">
                <span style={{ color: mode === 'light' ? LightHighlightColor : DarkHighlightColor }}>
                  {languages}
                </span>
              </Typography>
              <Box>
                {gitHubButton}
                {playStoreButton}
                {webButton}
              </Box>

            </Grid>

          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectItem;
