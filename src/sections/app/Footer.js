import React from 'react';
import { useTheme, Box, Typography, Stack } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import { MarginDefault, onLightIconColor, onDarkIconColor, MarginXSmall } from '../../ThemeContext';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as XIcon } from '../../assets/x.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as YouTubeIcon } from '../../assets/youtube.svg';
import { Email } from '@mui/icons-material';
import IconButtonComponent from '../../components/common/IconButtonComponent';

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
          <IconButtonComponent href='https://github.com/jimmyale3102' IconComponent={GitHubIcon} />
          <IconButtonComponent href='https://www.linkedin.com/in/jimmyplazas/' IconComponent={LinkedInIcon} />
          <IconButtonComponent href='https://twitter.com/jimmyale3201' IconComponent={XIcon} />
          <IconButtonComponent href='https://www.instagram.com/aleejo_loopez/' IconComponent={InstagramIcon} />
          <IconButtonComponent href='https://www.youtube.com/@jimmy_code/videos' IconComponent={YouTubeIcon} />
          <IconButtonComponent href='mailto:hi@jimmyplazas.dev' IconComponent={Email} />
        </Box>
        <Typography
          margin={MarginDefault}
          variant="body2"
          fontStyle={'italic'}
          style={{ justifyContent: 'center', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
          Made with
          <Favorite style={{ width: '18px', height: '18px', fill: iconColor, marginInline: MarginXSmall }} />
          by Jimmy.
        </Typography>

      </Stack>
    </Box>
  );
}

export default Footer;
