import React from 'react';
import { useTheme, CardActionArea, Card, CardContent, Typography } from '@mui/material';
import { BorderRadiusCard, BackgroundColorDark, BackgroundColorLight, MarginSmall } from '../../ThemeContext';
import { YouTube } from '@mui/icons-material';
import IconButtonComponent from '../common/IconButtonComponent';

function ShortsItem({ videoId, title, videoAlt, url }) {
  const theme = useTheme();
  const cardBackgroundColor = theme.palette.mode === 'light' ? BackgroundColorLight : BackgroundColorDark;

  return (
    <Card
      style={{
        height: 'auto',
        backgroundColor: cardBackgroundColor,
        boxShadow: 'none',
        borderRadius: BorderRadiusCard,
        marginLeft: MarginSmall,
        marginRight: MarginSmall,
        flex: '0 0 auto'
      }}
    >
      <CardActionArea target='_blank' style={{ backgroundColor: cardBackgroundColor }}>
        <CardContent>
          <lite-youtube
            videoid={videoId}
            style={{
              width: '100%',
              aspectRatio: '9 / 16',
              borderRadius: 12,
              overflow: 'hidden'
            }}
          />
          <Typography
            variant="body2"
            fontWeight={'bold'}
            style={{
              marginTop: MarginSmall,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </Typography>
          <div style={{ marginTop: MarginSmall, width: "100%" }}>
            <IconButtonComponent
              text="Watch on YouTube"
              href={url}
              IconComponent={YouTube}
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ShortsItem;