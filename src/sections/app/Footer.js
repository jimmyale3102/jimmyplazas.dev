import React from 'react';
import { useTheme, Box, Container, Typography, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Favorite } from '@mui/icons-material';
import { MarginDefault, onLightIconColor, onDarkIconColor, MarginXSmall } from '../../ThemeContext';

function Footer() {
  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? onLightIconColor : onDarkIconColor;
  return (

    <Box display="flex" alignItems="center" justifyContent="center"
      sx={{
        p: MarginDefault,
        maxWidth: '810px',
        margin: '0 auto',
        marginBottom: '56px',
        borderTop: '1px solid grey'
      }}>
      <Typography variant="body2" fontStyle={'italic'} style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        Made with
        <Favorite style={{ width: '18px', height: '18px', fill: iconColor, marginInline: MarginXSmall }} />
        by Jimmy.
      </Typography>
    </Box>
  );
}

export default Footer;
