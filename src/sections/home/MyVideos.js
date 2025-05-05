import React, { useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useThemeContext, MarginDefault, onDarkTextColor, onLightTextColor, BorderRadiusMedium, MarginXBig } from '../../ThemeContext';
import { ArrowForward, YouTube } from '@mui/icons-material';
import VideoItem from '../../components/home/VideoItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShortsItem from '../../components/home/ShortsItem';

function MyVideos() {
  const [videosData, setVideos] = useState([]);
  const [shortsData, setShorts] = useState([]);
  const { mode } = useThemeContext();
  const youtubeUrl = "https://www.youtube.com/@jimmy_coding/videos"

  useEffect(() => {
    fetch('./content/videos.json')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos data:', error));
  }, []);

  useEffect(() => {
    fetch('./content/shorts.json')
      .then(response => response.json())
      .then(data => setShorts(data))
      .catch(error => console.error('Error fetching shorts data:', error));
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Box style={{ marginTop: MarginXBig }} >
      <Typography
        variant="h4"
        fontWeight={'bold'}
        style={{ marginLeft: MarginDefault, marginBottom: MarginDefault }}>
        <span style={{ color: mode === 'light' ? onLightTextColor : onDarkTextColor }} >My videos</span>
      </Typography>

      <Slider {...settings}>
        {shortsData.map((shortItem, index) => (
          <div key={index} style={{ padding: 8 }}>
            <ShortsItem
              key={index}
              videoId={shortItem.videoId}
              title={shortItem.title}
              videoAlt={shortItem.videoAlt}
              url={shortItem.url}
            />
          </div>
        ))}
      </Slider>

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
          onClick={() => window.open(youtubeUrl, '_blank')}
          variant="contained"
          startIcon={<ArrowForward />}
          style={{ borderRadius: BorderRadiusMedium }}
        >
          <Typography
            style={{ textTransform: 'none' }}
            variant={"subtitle1"}
            alignSelf={'flex-start'}
            fontWeight={"bold"}
          >
            Watch all
          </Typography>
        </Button>
      </div>

    </Box>
  );
}

export default MyVideos;
