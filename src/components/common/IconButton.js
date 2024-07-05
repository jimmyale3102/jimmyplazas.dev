import React from 'react';
import { useTheme, IconButton } from '@mui/material';
import { BorderRadiusMedium, onLightIconColor, onDarkIconColor } from '../../ThemeContext';

function IconButtonComponent(href, IconComponent) {
  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? onLightIconColor : onDarkIconColor;

  return (
    href ? (
      <IconButton
        style={{ marginRight: '4px', borderRadius: BorderRadiusMedium }}
        onClick={() => window.open(href, '_blank')}
      >
        <IconComponent style={{ fill: iconColor }} />
      </IconButton>
    ) : null
  );
};

export default IconButtonComponent;