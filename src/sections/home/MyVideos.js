import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useThemeContext, MarginDefault, onDarkTextColor, onLightTextColor } from '../../ThemeContext';
import VideoItem from '../../components/home/videoItem';

function MyVideos() {
  const [videosData, setVideos] = useState([]);
  const { mode } = useThemeContext();

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

    </Box>
  );
}

export default MyVideos;
