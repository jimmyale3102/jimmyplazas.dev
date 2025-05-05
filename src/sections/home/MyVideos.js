import React, { useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useThemeContext, MarginDefault, onDarkTextColor, onLightTextColor, BorderRadiusMedium } from '../../ThemeContext';
import VideoItem from '../../components/home/videoItem';
import ShortsList from '../../components/home/ShortsListItem';

function MyVideos() {
  const [videosData, setVideos] = useState([]);
  const [ShortsData, setShorts] = useState([]);
  const { mode } = useThemeContext();
  const youtubeUrl = "https://www.youtube.com/@jimmy_coding/videos"

  useEffect(() => {
    fetch('./content/shorts.json')
      .then(responsd => responsd.json())
      .then(data => setShorts(data))
      .catch(error => console.error('Error fetching experience data:', error));
  }, []);

  useEffect(() => {
    fetch('./content/videos.json')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching experience data:', error));
  }, []);

  return (
    <Box >
      <Typography
        variant="h4"
        fontWeight={'bold'}
        style={{ marginLeft: MarginDefault, marginBottom: MarginDefault }}>
        <span style={{ color: mode === 'light' ? onLightTextColor : onDarkTextColor }} >My videos</span>
      </Typography>

      {ShortsData.map((shortsList, index) => (
        <ShortsList
          key={index}
          videoId={shortsList.videoId}
          title={shortsList.title}
          description={shortsList.description}
          videoAlt={shortsList.videoAlt}
          url={shortsList.url}
        />
      ))}

      {videosData.map((videoItem, index) => (
        <VideoItem
          key={index}
          videoId={videoItem.videoId}
          title={videoItem.title}
          description={videoItem.description}
          videoAlt={videoItem.videoAlt}
          url={videoItem.url}
        />
      ))}
      <div style={{ display: 'flex', justifyContent: 'end' }}>
      <Button
        style={{ borderRadius: BorderRadiusMedium, textTransform: 'none'}}
        onClick={() => window.open(youtubeUrl, '_blank')}
      >
        <Typography
          style={{ color: mode === 'light' ? onLightTextColor : onDarkTextColor }}
          margin={'4px'} variant="h6" fontWeight={'bold'} alignSelf={'center'}>
          Watch all
        </Typography>
      </Button>
      </div>

    </Box>
  );
}

export default MyVideos;
