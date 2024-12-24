import React from 'react';
import { useTheme, IconButton, Typography } from '@mui/material';
import { BorderRadiusMedium, onLightIconColor, onDarkIconColor } from '../../ThemeContext';

function IconButtonComponent({ text = '', href, IconComponent }) {
  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? onLightIconColor : onDarkIconColor;

  return (
    href ? (
      <IconButton
        sx={{ mr: '4px', borderRadius: BorderRadiusMedium }}
        onClick={() => window.open(href, '_blank')}
      >
        <IconComponent style={{ fill: iconColor }} />
        {
          text ? (
            <Typography paddingLeft={'8px'} variant="body2" color="text.secondary" alignSelf={'center'}>
              {text}
            </Typography>
          ) : null
        }
      </IconButton>
    ) : null
  );
};

export default IconButtonComponent;