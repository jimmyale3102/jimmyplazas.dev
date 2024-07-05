import React from 'react';
import { useTheme, Avatar, CardActionArea, Card, CardContent, Typography, Grid } from '@mui/material';
import { useThemeContext, BorderRadiusMedium, BorderRadiusCard, BackgroundColorDark, BackgroundColorLight, LightHighlightColor, DarkHighlightColor } from '../../ThemeContext';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as PlayStoreIcon } from '../../assets/play_store.svg';
import WebIcon from '@mui/icons-material/Web';
import IconButtonComponent from '../common/IconButton';

function ProjectItem({ iconSrc, title, time, description, technologies, url, webUrl, gitHubUrl, playStoreUrl }) {
  const { mode } = useThemeContext();
  const theme = useTheme();
  const cardBackgroundColor = theme.palette.mode === 'light' ? BackgroundColorLight : BackgroundColorDark;

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
                  marginTop: '2px',
                  borderRadius: BorderRadiusMedium
                }}
              />
            </Grid>

            <Grid item style={{ flex: 1 }}>
              <Grid container direction={'row'} display={{display: '-ms-inline-flexbox'}}>
                <Grid item style={{display: 'flex'}}>
                  <Typography variant="body1" fontWeight={'bold'}>
                    {title}
                  </Typography>
                </Grid>
                <Grid item style={{flex: 1}}>
                  <Typography variant="body2" color="text.secondary" style={{textAlign: 'end'}}>
                    {time}
                  </Typography>
                </Grid>
              </Grid>

              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography variant="caption">
                <span style={{ color: mode === 'light' ? LightHighlightColor : DarkHighlightColor }}>
                  {technologies}
                </span>
              </Typography>
            </Grid>

            <Grid item alignSelf={'center'} style={{ display: 'flex' }}>
              {IconButtonComponent(webUrl, WebIcon)}
              {IconButtonComponent(gitHubUrl, GitHubIcon)}
              {IconButtonComponent(playStoreUrl, PlayStoreIcon)}
            </Grid>

          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectItem;
