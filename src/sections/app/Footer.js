import React from 'react';
import { useTheme, Box, Typography, Stack } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import { MarginDefault, onLightIconColor, onDarkIconColor, MarginXSmall } from '../../ThemeContext';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as XIcon } from '../../assets/x.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as YouTubeIcon } from '../../assets/youtube.svg';
import IconButtonComponent from '../../components/common/IconButton';
import { Email} from '@mui/icons-material';

function Footer() {
  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? onLightIconColor : onDarkIconColor;
  return (

    <Box display="flex" alignItems="center" justifyContent="center"
      sx={{
        p: MarginDefault,
        maxWidth: '810px',
        margin: '0 auto',
        borderTop: '1px solid grey'
      }}>
      <Stack direction={'column'}>
        <Box>
          {IconButtonComponent('https://github.com/jimmyale3102', GitHubIcon)}
          {IconButtonComponent('https://www.linkedin.com/in/jimmyplazas/', LinkedInIcon)}
          {IconButtonComponent('https://twitter.com/jimmyale3201', XIcon)}
          {IconButtonComponent('https://www.instagram.com/aleejo_loopez/', InstagramIcon)}
          {IconButtonComponent('https://www.youtube.com/@jimmy_code/videos', YouTubeIcon)}
          {IconButtonComponent('mailto:hi@jimmyplazas.dev', Email)}
        </Box>
        <Typography variant="body2" fontStyle={'italic'} style={{ justifyContent: 'center', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
          Made with
          <Favorite style={{ width: '18px', height: '18px', fill: iconColor, marginInline: MarginXSmall }} />
          by Jimmy.
        </Typography>

      </Stack>
    </Box>
  );
}

export default Footer;
