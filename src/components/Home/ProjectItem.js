import React from 'react';
import { useTheme, Box, IconButton, Avatar, CardActionArea, Card, CardContent, Typography, Grid } from '@mui/material';
import { useThemeContext, BorderRadiusMedium, BorderRadiusCard, BackgroundColorDark, BackgroundColorLight, LightHighlightColor, DarkHighlightColor, onLightIconColor, onDarkIconColor } from '../../ThemeContext';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as PlayStoreIcon } from '../../assets/play_store.svg';
import WebIcon from '@mui/icons-material/Web';


function ProjectItem({ iconSrc, title, description, technologies, url, webUrl, gitHubUrl, playStoreUrl }) {
  const { mode } = useThemeContext();
  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? onLightIconColor : onDarkIconColor;
  const cardBackgroundColor = theme.palette.mode === 'light' ? BackgroundColorLight : BackgroundColorDark;

  const renderIconButton = (href, IconComponent) => (
    href ? (
      <IconButton
        component="div"
        style={{ marginLeft: '4px', borderRadius: BorderRadiusMedium }}
        onClick={() => window.open(href, '_blank')}
      >
        <IconComponent style={{ fill: iconColor }} />
      </IconButton>
    ) : null
  );

  return (
    <Card style={{ backgroundColor: cardBackgroundColor, boxShadow: 'none', borderRadius: BorderRadiusCard }}>
      <CardActionArea href={url} target='_blank' style={{ backgroundColor: cardBackgroundColor }}>
        <CardContent>
          <Grid alignItems={'top'} style={{ display: 'flex' }}>

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
                  maxHeight: '56px',
                  maxWidth: '56px',
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
                  {technologies}
                </span>
              </Typography>
            </Grid>

            <Grid item alignSelf={'end'} style={{ display: 'flex' }}>
              {renderIconButton(webUrl, WebIcon)}
              {renderIconButton(gitHubUrl, GitHubIcon)}
              {renderIconButton(playStoreUrl, PlayStoreIcon)}
            </Grid>

          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectItem;
